import React from 'react';
import Modal from '../src/Modal';

class ModalTester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  }

  hideModal = () => {
    this.setState({ visible: false });
  }

  render = () => (
    <div>
      <button className="btn btn-primary" onClick={this.showModal}>Show modal</button>
      <Modal visible={this.state.visible} dialogClassName="modal-lg">
        <div className="modal-header">
          <h5 className="modal-title">Test modal</h5>
        </div>
        <div className="modal-body">
          Testing!
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={this.hideModal}>
            OK
          </button>
        </div>
      </Modal>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<ModalTester />, document.getElementById('modal-tester'));
});
