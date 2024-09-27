import React from "react";
import "./popover1.scss";

const Popover1 = ({ children }) => {
  return (
    <div>
      <div id="my-popover1" popover="manual">
        <button
          type="button"
          class="close-btn"
          popovertarget="my-popover1"
          popovertargetaction="hide"
        >
          ❌
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popover1;
