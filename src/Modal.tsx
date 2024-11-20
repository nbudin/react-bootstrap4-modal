import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

let modalsShowing = 0;

// I don't like these magic numbers but I haven't found a better way
const MODAL_VISIBILITY_CHANGE_DELAY = 16;
const MODAL_TRANSITION_DELAY = 150;

function modalWillShow() {
  if (modalsShowing === 0 && typeof document !== 'undefined' && document?.body) {
    document.body.classList.add('modal-open');
  }

  modalsShowing += 1;
}

function modalWillHide() {
  modalsShowing -= 1;

  if (modalsShowing === 0 && typeof document !== 'undefined' && document?.body) {
    document.body.classList.remove('modal-open');
  }
}

export type ModalProps = {
  children: ReactNode;
  onClickBackdrop?: React.MouseEventHandler<HTMLDivElement>;
  visible: boolean;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  className?: string;
  dialogClassName?: string;
  fade?: boolean;
  inline?: boolean;
  target?: HTMLElement | null;
};

function Modal(props: ModalProps): JSX.Element {
  const [visible, setVisible] = useState(props.visible ?? false);
  const [modalIndex, setModalIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const wasVisibleRef = useRef(false);
  const fadeRef = useRef(props.fade);

  useEffect(() => {
    if (props.visible) {
      modalWillShow();
      wasVisibleRef.current = true;
    } else if (wasVisibleRef.current) {
      modalWillHide();
    }

    if (props.visible || wasVisibleRef.current) {
      if (fadeRef.current ?? true) {
        setTransitioning(true);
        setModalIndex(modalsShowing);
        if (typeof window !== 'undefined') {
          const visibilityChangeTimeout = window.setTimeout(
            () => setVisible(props.visible),
            MODAL_VISIBILITY_CHANGE_DELAY,
          );
          const transitionEndTimeout = window.setTimeout(
            () => setTransitioning(false),
            MODAL_TRANSITION_DELAY,
          );
          return () => {
            window.clearTimeout(transitionEndTimeout);
            window.clearTimeout(visibilityChangeTimeout);
          };
        }
      } else {
        setVisible(props.visible);
      }
    }
  }, [props.visible]);

  useEffect(() => {
    fadeRef.current = props.fade;
  }, [props.fade]);

  const renderBackdrop = () => {
    if (visible || transitioning) {
      return (
        <div
          className={classNames('modal-backdrop', {
            show: visible,
            fade: props.fade ?? true,
          })}
          onClick={props.onClickBackdrop}
          role="presentation"
          style={{ zIndex: 1040 + modalIndex }}
        />
      );
    }

    return null;
  };

  const {
    wrapperProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible: unusedVisible,
    className,
    dialogClassName,
    onClickBackdrop,
    children,
    fade,
    inline,
    target,
    ...other
  } = props;

  const ui = (
    <div {...wrapperProps}>
      <div
        className={classNames('modal', { show: visible, fade: fade ?? true }, className)}
        style={{
          display: visible || transitioning ? 'block' : 'none',
          zIndex: 1040 + modalIndex + 1,
        }}
        role="dialog"
        aria-hidden={!visible}
        tabIndex={-1}
        onClick={onClickBackdrop}
        {...other}
      >
        <div
          className={classNames('modal-dialog', dialogClassName)}
          role="document"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
      {renderBackdrop()}
    </div>
  );

  const actualTarget = inline
    ? undefined
    : (target ?? (typeof document !== 'undefined' ? document.body : undefined));

  if (actualTarget) {
    return <>{createPortal(ui, actualTarget)}</>;
  } else {
    return ui;
  }
}

export default Modal;
