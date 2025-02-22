import React, { JSX, ReactNode } from 'react';
import Modal from './index';

export type ConfirmModalProps = {
  children: ReactNode;
  visible: boolean;
  onOK: React.MouseEventHandler<HTMLButtonElement>;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  /** Defaults to false */
  disableButtons?: boolean;
  /** Defaults to "OK" */
  okText?: string;
  /** Defaults to "Cancel" */
  cancelText?: string;
};

function ConfirmModal({
  visible,
  onOK,
  onCancel,
  children,
  disableButtons = false,
  okText = 'OK',
  cancelText = 'Cancel',
  ...other
}: ConfirmModalProps): JSX.Element {
  return (
    <Modal visible={visible} {...other}>
      <div className="modal-header">
        <h5 className="modal-title">Confirmation</h5>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
          disabled={disableButtons}
        >
          {cancelText}
        </button>
        <button type="button" className="btn btn-primary" onClick={onOK} disabled={disableButtons}>
          {okText}
        </button>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
