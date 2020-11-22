import React from 'react';
import KeyCap from './keycap';

function Numpad() {
  return (
    <div className="numlock-container">
      <div className="numlock-light-container">
        <div className="numlock-light"><span></span> Num Lock</div>
        <div className="capslock-light"><span></span> Caps Lock</div>
        <div className="scrolllock-light"><span></span> Scroll Lock</div>
      </div>
      <div className="numlock-numpad-container">
        <div className="numpad-first-line-container">
          <KeyCap code="NumLock" mainKey="Num Lock" keyClass="key-cap function-small" />
          <KeyCap code="NumpadDivide" mainKey="&divide;" keyClass="key-cap" />
          <KeyCap code="NumpadMultiply" mainKey="&times;" keyClass="key-cap" />
          <KeyCap code="NumpadSubtract" mainKey="&minus;" keyClass="key-cap" />
        </div>
        <div className="numpad-second-line-container">
          <KeyCap code="Numpad7" mainKey="7" keyClass="key-cap one-content" />
          <KeyCap code="Numpad8" mainKey="8" keyClass="key-cap one-content" />
          <KeyCap code="Numpad9" mainKey="9" keyClass="key-cap one-content" />
          <KeyCap code="NumpadAdd" mainKey="&#43;" keyClass="key-cap" />
        </div>
        <div className="numpad-first-line-container">
          <KeyCap code="Numpad4" mainKey="4" keyClass="key-cap one-content" />
          <KeyCap code="Numpad5" mainKey="5" keyClass="key-cap one-content" />
          <KeyCap code="Numpad6" mainKey="6" keyClass="key-cap one-content" />
          <KeyCap code="NumpadComma" mainKey="&#46;" keyClass="key-cap function" />
        </div>
        <div className="numpad-fourth-line-container">
          <KeyCap code="Numpad1" mainKey="1" keyClass="key-cap one-content" />
          <KeyCap code="Numpad2" mainKey="2" keyClass="key-cap one-content" />
          <KeyCap code="Numpad3" mainKey="3" keyClass="key-cap one-content" />
          <KeyCap code="NumpadEnter" mainKey="Enter" keyClass="key-cap function-small-tall" />
        </div>
        <div className="numpad-fifth-line-container">
          <KeyCap code="Numpad0" mainKey="0" keyClass="key-cap one-content-long" />
          <KeyCap code="NumpadDecimal" mainKey="&#44;" keyClass="key-cap function" />
        </div>
      </div>
    </div>
  );
}

export default Numpad;