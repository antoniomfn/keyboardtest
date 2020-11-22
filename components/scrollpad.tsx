import React from 'react';
import KeyCap from './keycap';

function ScrollPad() {
  return (
    <div className="middle-container">
      <div className="top-container">
        <KeyCap code="PrintScreen" mainKey="PrtScr" keyClass="key-cap function-small" />
        <KeyCap code="ScrollLock" mainKey="Scroll Lock" keyClass="key-cap function-small" />
        <KeyCap code="Pause" mainKey="Pause" keyClass="key-cap function-small" />
      </div>
      <div className="center-container">
        <div className="center-first-line-container">
          <KeyCap code="Insert" mainKey="Insert" keyClass="key-cap function-small" />
          <KeyCap code="Home" mainKey="Home" keyClass="key-cap function-small" />
          <KeyCap code="PageUp" mainKey="Page Up" keyClass="key-cap function-small" />
        </div>
        <div className="center-second-line-container">
          <KeyCap code="Delete" mainKey="Delete" keyClass="key-cap function-small" />
          <KeyCap code="End" mainKey="End" keyClass="key-cap function-small" />
          <KeyCap code="PageDown" mainKey="Page Down" keyClass="key-cap function-small" />
        </div>
      </div>
      <div className="arrows-container">
        <div className="arrow-first-line-container">
          <KeyCap code="ArrowUp" imageKey="/images/icons/arrow-up.svg" keyClass="key-cap arrow-up" />
        </div>
        <div className="arrow-second-line-container">
          <KeyCap code="ArrowLeft" imageKey="/images/icons/arrow-left.svg" keyClass="key-cap arrow-left" />
          <KeyCap code="ArrowDown" imageKey="/images/icons/arrow-down.svg" keyClass="key-cap arrow-down" />
          <KeyCap code="ArrowRight" imageKey="/images/icons/arrow-right.svg" keyClass="key-cap arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default ScrollPad;