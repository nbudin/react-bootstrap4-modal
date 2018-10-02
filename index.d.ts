import React from 'react';

export type ModalProps = {
    children: React.ReactChild | React.ReactChild[];
    onClickBackdrop?: ((ev: MouseEvent) => void) | null;
    visible: boolean;
    wrapperProps?: object | null;
    className?: string;
    dialogClassName?: string;
};

export type ModalState = {
    visible: boolean;
    transitioning?: boolean;
    modalIndex: number;
};

export default class Modal extends React.Component<ModalProps, ModalState> {
}

export type ConfirmModalProps = ModalProps & {
    onOK: (ev: MouseEvent) => void;
    onCancel: (ev: MouseEvent) => void;
    /** Defaults to false */
    disableButtons?: boolean;
    /** Defaults to 'OK' */
    okText?: string;
    /** Defaults to 'Cancel' */
    cancelText?: string;
};

export const ConfirmModal: (props: ConfirmModalProps) => Modal;
