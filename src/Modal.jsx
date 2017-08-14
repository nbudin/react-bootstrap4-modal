import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickBackdrop: PropTypes.func,
    visible: PropTypes.bool.isRequired,
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

  // Shenanigans to allow the CSS fade to happen before we stop rendering the dialog or divs
  componentDidUpdate = (prevProps) => {
    if (this.props.visible !== prevProps.visible) {
      this.setState({ transitioning: true }, () => {
        window.requestAnimationFrame(() => {
          this.setState({ visible: this.props.visible }, () => {
            window.setTimeout(() => { this.setState({ transitioning: false }); }, 150);
          });
        });
      });
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
        <div className="modal-dialog" role="document" onClick={this.stopPropagation}>
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
