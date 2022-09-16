import React from "react";
import { createPortal } from "react-dom";

interface IModalPortalProps {
  wrapperId?: string;
  children?: React.ReactNode;
}

const ModalPortal: React.FunctionComponent<IModalPortalProps> = ({
  children,
  wrapperId = "modalWrapper",
}) => {
  const [wrapperElement, setWrapperElement] =
    React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      created = true;

      const wrapperElement = document.createElement("div");
      wrapperElement.setAttribute("id", wrapperId);
      document.body.appendChild(wrapperElement);

      element = wrapperElement;
    }
    setWrapperElement(element);

    return () => {
      if (created && (element as HTMLElement).parentNode) {
        const elementNode = (element as HTMLElement).parentNode;

        if (elementNode) {
          elementNode.removeChild(element as HTMLElement);
        }
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ModalPortal;
