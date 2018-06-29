import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let modalsShowing = 0;

function modalWillShow() {
  if (modalsShowing === 0 && document) {
    document.body.classList.add('modal-open');
  }

  modalsShowing += 1;
}

function modalWillHide() {
  modalsShowing -= 1;

  if (modalsShowing === 0 && document) {
    document.body.classList.remove('modal-open');
  }
}

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickBackdrop: PropTypes.func,
    visible: PropTypes.bool.isRequired,
    wrapperProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    className: PropTypes.string,
    dialogClassName: PropTypes.string,
  };

  static defaultProps = {
    onClickBackdrop: null,
    wrapperProps: null,
    className: null,
    dialogClassName: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
      modalIndex: 0,
    };
  }

  componentWillMount = () => {
    if (this.props.visible) {
      modalWillShow();
    }
  }

  // Shenanigans to allow the CSS fade to happen before we stop rendering the dialog or divs
  componentDidUpdate = (prevProps) => {
    if (this.props.visible !== prevProps.visible) {
      if (this.props.visible) {
        modalWillShow();
      } else {
        modalWillHide();
      }

      this.setState({ transitioning: true, modalIndex: modalsShowing }, () => {
        window.requestAnimationFrame(() => {
          this.setState({ visible: this.props.visible }, () => {
            window.setTimeout(() => { this.setState({ transitioning: false }); }, 150);
          });
        });
      });
    }
  }

  componentWillUnmount = () => {
    if (this.props.visible) {
      modalWillHide();
    }
  }

  stopPropagation = (event) => {
    event.stopPropagation();
  }

  renderBackdrop = () => {
    if (this.state.visible || this.state.transitioning) {
      return (
        <div
          className={classNames('modal-backdrop', 'fade', { show: this.state.visible })}
          onClick={this.props.onClickBackdrop}
          role="presentation"
          style={{ zIndex: 1040 + this.state.modalIndex }}
        />
      );
    }

    return null;
  }

  render = () => {
    const {
      wrapperProps,
      className,
      dialogClassName,
      visible,
      onClickBackdrop,
      children,
      ...other
    } = this.props;

    return (
      <div
        {...wrapperProps}
      >
        <div
          className={classNames('modal', 'fade', { show: this.state.visible }, className)}
          style={{
            display: ((this.state.visible || this.state.transitioning) ? 'block' : 'none'),
            zIndex: 1040 + this.state.modalIndex + 1
          }}
          role="dialog"
          aria-hidden={!this.state.visible}
          tabIndex="-1"
          onClick={onClickBackdrop}
          {...other}
        >
          <div className={classNames('modal-dialog', dialogClassName)} role="document" onClick={this.stopPropagation}>
            <div className="modal-content">
              {children}
            </div>
          </div>
        </div>
        {this.renderBackdrop()}
      </div>
    );
  }
}

export default Modal;
