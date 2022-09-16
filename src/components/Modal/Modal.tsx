import React from "react";
import styles from "./Modal.module.scss";

import ModalPortal from "./ModalPortal";

interface IModalProps {
  children?: React.ReactNode;
  onClose?(): void;
}

const Modal: React.FC<IModalProps> = ({ children, onClose }) => (
  <ModalPortal wrapperId="modal">
    <div className={styles.wrapper} aria-modal="true" role="dialog">
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.innerContent}>{children}</div>
      </div>
    </div>
  </ModalPortal>
);

export default Modal;
