import React from "react";
import "./popover2.scss";

const Popover2 = ({ children }) => {
  return (
    <div id="my-popover" popover="">
      {children}
      <button
        type="button"
        class="close-btn"
        popovertarget="my-popover"
        popovertargetaction="hide"
      >
        ❌
      </button>
    </div>
  );
};

export default Popover2;
