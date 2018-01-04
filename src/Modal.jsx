import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let modalsShowing = 0;

function modalWillShow() {
  if (modalsShowing === 0) {
    document.body.classList.add('modal-open');
  }

  modalsShowing += 1;
}

function modalWillHide() {
  modalsShowing -= 1;

  if (modalsShowing === 0) {
    document.body.classList.remove('modal-open');
  }
}

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickBackdrop: PropTypes.func,
    visible: PropTypes.bool.isRequired,
    large: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    onClickBackdrop: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
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

      this.setState({ transitioning: true }, () => {
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
        />
      );
    }

    return null;
  }

  render = () => (
    <div>
      <div
        className={classNames('modal', 'fade', { show: this.state.visible })}
        style={{ display: ((this.state.visible || this.state.transitioning) ? 'block' : 'none') }}
        role="dialog"
        aria-hidden={!this.state.visible}
        tabIndex="-1"
        onClick={this.props.onClickBackdrop}
      >
        <div className={classNames('modal-dialog', { 'modal-lg': this.props.large }, { 'modal-sm': this.props.small )} role="document" onClick={this.stopPropagation}>
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
      {this.renderBackdrop()}
    </div>
    )
}

export default Modal;
