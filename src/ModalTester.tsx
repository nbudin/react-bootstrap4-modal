import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../src/Modal';

function ModalTester({}) {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={showModal}>
        Show modal
      </button>
      <Modal visible={visible} dialogClassName="modal-lg">
        <div className="modal-header">
          <h5 className="modal-title">Test modal</h5>
        </div>
        <div className="modal-body">Testing!</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={hideModal}>
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<ModalTester />, document.getElementById('modal-tester'));
});
