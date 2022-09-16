import React from "react";
import styles from "./Modal.module.scss";

import ModalPortal from "./ModalPortal";

export interface IFullScreenModalProps {
  children?: React.ReactNode;
  onClose?(): void;
}

const Modal: React.FC<IFullScreenModalProps> = ({ children, onClose }) => (
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
