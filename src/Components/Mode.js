import React from "react";

export default function Mode(props) {
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onClick={props.togglemode}
      />
      <label
        class={`form-check-label text-${
          props.mode === "light" ? "DARK" : "light"
        }`}
        for="flexSwitchCheckChecked"
      >
        Dark mode
      </label>
    </div>
  );
}
