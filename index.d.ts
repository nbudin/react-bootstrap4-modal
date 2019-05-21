import React from 'react';

export type ModalProps = {
    children: React.ReactChild | React.ReactChild[];
    onClickBackdrop?: ((ev: React.MouseEvent<HTMLDivElement>) => void) | null;
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
    onOK: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    /** Defaults to false */
    disableButtons?: boolean;
    /** Defaults to 'OK' */
    okText?: string;
    /** Defaults to 'Cancel' */
    cancelText?: string;
};

export const ConfirmModal: (props: ConfirmModalProps) => Modal;
