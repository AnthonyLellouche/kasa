import React, { useRef, useState } from "react";
import "../styles/components/collapse.scss";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`collapse ${props.className}`}>
      <button className="toggle" onClick={toggle}>
        {props.label}
        <i
          className={`fa-solid ${open ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </button>
      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;
