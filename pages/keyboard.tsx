import React from 'react'
import Head from 'next/head'
import PTBR from '../components/main_ptbr'
import ScrollPad from '../components/scrollpad'
import Numpad from '../components/numpad'

function Keyboard() {
  if (typeof window != 'undefined') {
    window.addEventListener('mousemove', function lockKey(e) {
      e.getModifierState("CapsLock") && document.getElementsByClassName("capslock-light")[0].classList.add("on");
      e.getModifierState("NumLock") && document.getElementsByClassName("numlock-light")[0].classList.add("on");
      e.getModifierState("ScrollLock") && document.getElementsByClassName("scrolllock-light")[0].classList.add("on");
      window.addEventListener('mousemove', lockKey);
    });

    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      var key = e.code;
      var keyChar = e.key;
      var keyElement = document.getElementById(key);
      var log = document.getElementById("keyboard-log");

      if (keyElement == null) {
        console.log("Unfind keydown " + key);
        log?.append("Unfind keydown " + key + " - Character = " + keyChar + " - Status = OK\n");
      }

      else {
        console.log("Press " + key);
        log?.append("Press " + key + " - Character: " + keyChar + " - Status = OK\n");

        keyElement.classList.add("actived");

        if (key === 'Enter') {
          var enterKey = document.getElementById("Enter2");
          enterKey && enterKey.classList.add("actived-2");
        }
      }

      if (log != null) log.scrollTop = log.scrollHeight;
    });

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      var key = e.code;
      var keyChar = e.key;
      var keyElement = document.getElementById(key);
      var log = document.getElementById("keyboard-log");

      if (keyElement == null) {
        console.log("Unfind keyup " + key);
        log?.append("Unfind keyup " + key + " - Character = " + keyChar + " - Status = OK\n");
      }

      else {
        console.log("Release " + key);
        log?.append("Release " + key + " - Character = " + keyChar + " - Status = OK\n");
        keyElement.classList.remove("actived");

        switch (key) {
          case "Enter":
            var enterKey = document.getElementById("Enter2");
            enterKey && enterKey.classList.remove("actived-2");
            break;
          case "CapsLock":
            if (e.getModifierState("CapsLock")) {
              document.getElementsByClassName("capslock-light")[0].classList.add("on")
            } else {
              document.getElementsByClassName("capslock-light")[0].classList.remove("on")
            }
            break;
          case "NumLock":
            if (e.getModifierState("NumLock")) {
              document.getElementsByClassName("numlock-light")[0].classList.add("on")
            } else {
              document.getElementsByClassName("numlock-light")[0].classList.remove("on")
            }
            break;
          case "ScrollLock":
            if (e.getModifierState("ScrollLock")) {
              document.getElementsByClassName("scrolllock-light")[0].classList.add("on")
            } else {
              document.getElementsByClassName("scrolllock-light")[0].classList.remove("on")
            }
            break;
        }

        if (log != null) log.scrollTop = log.scrollHeight;
      }
    });
  }

  return (
    <div className="keyboard-layout">
      <div id="keyboard">
        <PTBR />
        <ScrollPad />
        <Numpad />
      </div>
      <textarea id="keyboard-log"></textarea>
    </div>

  )
}

export default Keyboard;