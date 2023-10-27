"use client";

import React, { useState } from "react";

function Usestate() {
  const [count, setcount] = useState(1);
  const counterHandler = () => {
    setcount(count + 1);
  };

  return (
    <div className="text-center">
      <h1>Usestate</h1>
      <p>usestate====={count}</p>

      <button onClick={counterHandler}>count</button>
    </div>
  );
}

export default Usestate;
