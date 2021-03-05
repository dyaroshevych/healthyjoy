import React, { memo } from "react";
import Transition from "react-transition-group/Transition";

import { Backdrop } from "../";

import "./Modal.scss";

const Modal = ({ visible, toggleVisibility, children }) => (
  <Transition in={visible} timeout={500} mountOnEnter unmountOnExit>
    {(state) => {
      const modalClasses = ["Modal"];

      if (state === "entering") {
        modalClasses.push("ModalOpened");
      } else if (state === "exiting") {
        modalClasses.push("ModalClosed");
      }

      return (
        <>
          <Backdrop
            visible={state === "entering" || state === "entered"}
            toggleVisibility={toggleVisibility}
          />
          <div className={modalClasses.join(" ")}>
            <div className="Modal_content">
              <button
                className="Modal_button"
                onClick={toggleVisibility}
              ></button>
              {children}
            </div>
          </div>
        </>
      );
    }}
  </Transition>
);

export default memo(
  Modal,
  (prevProps, nextProps) => prevProps.visible === nextProps.visible
);
