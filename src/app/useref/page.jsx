"use client";
import React, { useRef, useState } from "react";

function Useref() {
  const counter = useRef(1);
  const mycolor = useRef("");
  const [count, setcount] = useState(1);
  const counterHandler = () => {
    setcount(count + 1);
  };
  const refHandler = () => {
    counter.current = counter.current * 10;
  };
  function changeStyle() {
    mycolor.current.style.backgroundColor = "red";
    mycolor.current.focus();
    mycolor.current.focus();
  }
  return (
    <div className="text-center">
      <h1>Useref</h1>
      <p>usestate====={count}</p>
      <p>useRef======{counter.current}</p>

      <button onClick={counterHandler}>count</button>
      <br />
      <br />
      <button onClick={refHandler}>refcount</button>
      <br />
      <br />
      <input type="text" name="Arham" id="arhamm" ref={mycolor} />
      <button type="submit" onClick={changeStyle}>
        Submit
      </button>
    </div>
  );
}

export default Useref;
