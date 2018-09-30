import React from 'react';
import PropTypes from 'prop-types';
import Modal from './index';

const ConfirmModal = ({ visible, onOK, onCancel, children, disableButtons = false, OKText = 'OK', cancelText = 'Cancel', ...other }) => (
  <Modal visible={visible} {...other}>
    <div className="modal-header">
      <h5 className="modal-title">Confirmation</h5>
    </div>
    <div className="modal-body">
      {children}
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={disableButtons}>
        {cancelText}
      </button>
      <button type="button" className="btn btn-primary" onClick={onOK} disabled={disableButtons}>
        {OKText}
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
  OKText: PropTypes.string,
  cancelText: PropTypes.string,
};

ConfirmModal.defaultProps = {
  disableButtons: false,
  OKText: 'OK',
  cancelText: 'Cancel',
};

export default ConfirmModal;
