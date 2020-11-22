import React from 'react';

interface KeyCapProps {
  code: string;
  mainKey?: string;
  shiftKey?: string;
  altKey?: string;
  imageKey?: string;
  keyClass: string;
}

const KeyCap: React.FC<KeyCapProps> = (props) => {
  function pressEnter() {
    if (props.code === "Enter") {
      var keyEnter2 = document.getElementById("Enter2");
      keyEnter2 && keyEnter2.classList.add("actived-2");
    }

    else if (props.code === "Enter2") {
      var keyEnter = document.getElementById("Enter");
      keyEnter && keyEnter.classList.add("actived");
    }
  }

  function releaseEnter() {
    if (props.code === "Enter") {
      var keyEnter2 = document.getElementById("Enter2");
      keyEnter2 && keyEnter2.classList.remove("actived-2");
    }

    else if (props.code === "Enter2") {
      var keyEnter = document.getElementById("Enter");
      keyEnter && keyEnter.classList.remove("actived");
    }
  }

  return (
    <button id={props.code} className={props.keyClass} onMouseDown={pressEnter} onMouseUp={releaseEnter}>
      { props.shiftKey && <span className="shift-key">{props.shiftKey}</span>}
      { props.mainKey && <span className="main-key">{props.mainKey}</span>}
      { props.imageKey && <img src={props.imageKey} alt={props.code} />}
      { props.shiftKey && <span className="alt-key">{props.altKey}</span>}
    </button>
  );
};

export default KeyCap;