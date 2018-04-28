import React from 'react';
import PropTypes from 'prop-types';
import Modal from './index';

const ConfirmModal = ({ visible, onOK, onCancel, children, disableButtons = false, ...other }) => (
  <Modal visible={visible} {...other}>
    <div className="modal-header">
      <h5 className="modal-title">Confirmation</h5>
    </div>
    <div className="modal-body">
      {children}
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={disableButtons}>
        Cancel
      </button>
      <button type="button" className="btn btn-primary" onClick={onOK} disabled={disableButtons}>
        OK
      </button>
    </div>
  </Modal>
);

ConfirmModal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onOK: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  disableButtons: PropTypes.bool,
};

ConfirmModal.defaultProps = {
  disableButtons: false,
};

export default ConfirmModal;
