import React from 'react';
import KeyCap from './keycap';

function PTBR() {
    return (
        <div className="standard-container">
            <div className="function-container">
                <KeyCap code="Escape" mainKey="Esc" keyClass="key-cap function" />
                <KeyCap code="F1" mainKey="F1" keyClass="key-cap function" />
                <KeyCap code="F2" mainKey="F2" keyClass="key-cap function" />
                <KeyCap code="F3" mainKey="F3" keyClass="key-cap function" />
                <KeyCap code="F4" mainKey="F4" keyClass="key-cap function" />
                <KeyCap code="F5" mainKey="F5" keyClass="key-cap function" />
                <KeyCap code="F6" mainKey="F6" keyClass="key-cap function" />
                <KeyCap code="F7" mainKey="F7" keyClass="key-cap function" />
                <KeyCap code="F8" mainKey="F8" keyClass="key-cap function" />
                <KeyCap code="F9" mainKey="F9" keyClass="key-cap function" />
                <KeyCap code="F10" mainKey="F10" keyClass="key-cap function" />
                <KeyCap code="F11" mainKey="F11" keyClass="key-cap function" />
                <KeyCap code="F12" mainKey="F12" keyClass="key-cap function" />
            </div>
            <div className="main-container">
                <div className="main-first-line-container">
                    <KeyCap code="Backquote" mainKey="&#39;" shiftKey="&#34;" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit1" mainKey="1" shiftKey="&#33;" altKey="1" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit2" mainKey="2" shiftKey="&#64;" altKey="2" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit3" mainKey="3" shiftKey="&#35;" altKey="3" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit4" mainKey="4" shiftKey="&#36;" altKey="&#163;" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit5" mainKey="5" shiftKey="&#37;" altKey="&#162;" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit6" mainKey="6" shiftKey="&#168;" altKey="&#172;" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit7" mainKey="7" shiftKey="&#38;" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit8" mainKey="8" shiftKey="&#42;" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit9" mainKey="9" shiftKey="&#40;" keyClass="key-cap more-contents" />
                    <KeyCap code="Digit0" mainKey="0" shiftKey="&#41;" keyClass="key-cap more-contents" />
                    <KeyCap code="Minus" mainKey="&#45;" shiftKey="&#95;" keyClass="key-cap more-contents" />
                    <KeyCap code="Equal" mainKey="&#61;" shiftKey="&#43;" altKey="&#167;" keyClass="key-cap more-contents" />
                    <KeyCap code="Backspace" mainKey="&larr;" keyClass="key-backspace" />
                </div>
                <div className="main-second-line-container">
                    <KeyCap code="Tab" mainKey="Tab" keyClass="key-tab" />
                    <KeyCap code="KeyQ" mainKey="Q" keyClass="key-cap one-content" />
                    <KeyCap code="KeyW" mainKey="W" keyClass="key-cap one-content" />
                    <KeyCap code="KeyE" mainKey="E" keyClass="key-cap one-content" />
                    <KeyCap code="KeyR" mainKey="R" keyClass="key-cap one-content" />
                    <KeyCap code="KeyT" mainKey="T" keyClass="key-cap one-content" />
                    <KeyCap code="KeyY" mainKey="Y" keyClass="key-cap one-content" />
                    <KeyCap code="KeyU" mainKey="U" keyClass="key-cap one-content" />
                    <KeyCap code="KeyI" mainKey="I" keyClass="key-cap one-content" />
                    <KeyCap code="KeyO" mainKey="O" keyClass="key-cap one-content" />
                    <KeyCap code="KeyP" mainKey="P" keyClass="key-cap one-content" />
                    <KeyCap code="BracketLeft" mainKey="&#180;" shiftKey="&#96;" keyClass="key-cap more-contents" />
                    <KeyCap code="BracketRight" mainKey="&#91;" shiftKey="&#123;" altKey="a" keyClass="key-cap more-contents" />
                    <KeyCap code="Enter" keyClass="key-enter1" />
                </div>
                <div className="main-third-line-container">
                    <KeyCap code="CapsLock" mainKey="Caps Lock" keyClass="key-capslock" />
                    <KeyCap code="KeyA" mainKey="A" keyClass="key-cap one-content" />
                    <KeyCap code="KeyS" mainKey="S" keyClass="key-cap one-content" />
                    <KeyCap code="KeyD" mainKey="D" keyClass="key-cap one-content" />
                    <KeyCap code="KeyF" mainKey="F" keyClass="key-cap one-content" />
                    <KeyCap code="KeyG" mainKey="G" keyClass="key-cap one-content" />
                    <KeyCap code="KeyH" mainKey="H" keyClass="key-cap one-content" />
                    <KeyCap code="KeyJ" mainKey="J" keyClass="key-cap one-content" />
                    <KeyCap code="KeyK" mainKey="K" keyClass="key-cap one-content" />
                    <KeyCap code="KeyL" mainKey="L" keyClass="key-cap one-content" />
                    <KeyCap code="Semicolon" mainKey="Ç" keyClass="key-cap one-content" />
                    <KeyCap code="Quote" mainKey="&#126;" shiftKey="&#94;" keyClass="key-cap more-contents" />
                    <KeyCap code="Backslash" mainKey="&#93;" shiftKey="&#125;" altKey="o" keyClass="key-cap more-contents" />
                    <KeyCap code="Enter2" mainKey="Enter" keyClass="key-enter2" />
                </div>
                <div className="main-fourth-line-container">
                    <KeyCap code="ShiftLeft" mainKey="Shift" keyClass="key-shift-left" />
                    <KeyCap code="IntlBackslash" mainKey="&#92;" shiftKey="&#124;" keyClass="key-cap more-contents" />
                    <KeyCap code="KeyZ" mainKey="Z" keyClass="key-cap one-content" />
                    <KeyCap code="KeyX" mainKey="X" keyClass="key-cap one-content" />
                    <KeyCap code="KeyC" mainKey="C" keyClass="key-cap one-content" />
                    <KeyCap code="KeyV" mainKey="V" keyClass="key-cap one-content" />
                    <KeyCap code="KeyB" mainKey="B" keyClass="key-cap one-content" />
                    <KeyCap code="KeyN" mainKey="N" keyClass="key-cap one-content" />
                    <KeyCap code="KeyM" mainKey="M" keyClass="key-cap one-content" />
                    <KeyCap code="Comma" mainKey="&#44;" shiftKey="&#60;" keyClass="key-cap more-contents" />
                    <KeyCap code="Period" mainKey="&#46;" shiftKey="&#62;" keyClass="key-cap more-contents" />
                    <KeyCap code="Slash" mainKey="&#59;" shiftKey="&#58;" keyClass="key-cap more-contents" />
                    <KeyCap code="IntlRo" mainKey="&#47;" shiftKey="&#63;" altKey="&#176;" keyClass="key-cap more-contents" />
                    <KeyCap code="ShiftRight" mainKey="Shift" keyClass="key-shift-right" />
                </div>
                <div className="main-fourth-line-container">
                    <KeyCap code="ControlLeft" mainKey="Ctrl" keyClass="key-cap-long" />
                    <KeyCap code="MetaLeft" imageKey="/images/icons/windows.svg" keyClass="key-cap-long" />
                    <KeyCap code="AltLeft" mainKey="Alt" keyClass="key-cap-long" />
                    <KeyCap code="Space" keyClass="key-spacebar" />
                    <KeyCap code="AltRight" mainKey="Alt" keyClass="key-cap-long" />
                    <KeyCap code="MetaRight" imageKey="/images/icons/windows.svg" keyClass="key-cap-long" />
                    <KeyCap code="ContextMenu" mainKey="Menu" keyClass="key-cap-long" />
                    <KeyCap code="ControlRight" mainKey="Ctrl" keyClass="key-cap-long" />
                </div>
            </div>
        </div>
    );
}

export default PTBR;