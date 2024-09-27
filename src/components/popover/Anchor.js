import React from "react";
import './anchor.scss';

const Anchor = () => {
  return (
    <div>
      <button popovertarget="my-tooltip" className="anchor-btn">
        <p>?</p>
      </button>

      <div id="my-tooltip" class="tooltip" popover>
        <p>
          I am a tooltip with more information. I am a tooltip with more
          information. I am a tooltip with more information. I am a tooltip with
          more information.
        </p>
      </div>
    </div>
  );
};

export default Anchor;
