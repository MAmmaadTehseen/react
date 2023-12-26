import React from "react";

export default function Mode(props) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onClick={props.togglemode}
      />
      <label
        className={`form-check-label text-${
          props.mode === "light" ? "DARK" : "light"
        }`}
        for="flexSwitchCheckChecked"
      >
        Dark mode
      </label>
    </div>
  );
}
