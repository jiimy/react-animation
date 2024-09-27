import React from "react";
import "./popover3.scss";

const Popover3 = ({ children }) => {
  return (
    <div class="menu">
      <button class="menu-toggle" id="menu-toggle" popovertarget="menu-items">
        <div aria-hidden="true">➕</div>
        <div class="sr-only">open menu</div>
      </button>
      <menu class="menu-items" id="menu-items" popover data-anchor="menu-toggle">
        <li class="item">
          <button>
            <div aria-hidden="true">♥️</div>
            <div class="sr-only">add to favorites</div>
          </button>
        </li>
        <li class="item">
          <button>
            <div aria-hidden="true">💾</div>
            <div class="sr-only">save to collection</div>
          </button>
        </li>
        <li class="item">
          <button>
            <div aria-hidden="true">🔗</div>
            <div class="sr-only">copy link</div>
          </button>
        </li>
        <li class="item">
          <button>
            <div aria-hidden="true">✉️</div>
            <div class="sr-only">email</div>
          </button>
        </li>
        <li class="item">
          <button>
            <div aria-hidden="true">🛒</div>
            <div class="sr-only">add to cart</div>
          </button>
        </li>
        <li class="item">
          <button
            popovertargetaction="close"
            popovertarget="menu-items"
            class="hidden-close"
          >
            <div aria-hidden="true"> </div>
            <div class="sr-only">close menu</div>
          </button>
        </li>
      </menu>
    </div>
  );
};

export default Popover3;
