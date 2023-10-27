"use client";

import React, { useEffect, useMemo, useState } from "react";

function Usememo() {
  const [count, setcount] = useState(1);
  const [mincount, setmincount] = useState(1);

  //   const [item, setItem] = useState(0);

  const custom_memo = {
    a: {
      padding: "12px 30px",
      background: "#021df3",
      color: "white",
      border: "none",
      borderRadius: "10px",
      margin: "20px",
    },
  };

  const multi = useMemo(
    function me() {
      console.log("Arham");
      return count * 10;
    },
    [count]
  );
  return (
    <div className="text-center">
      <h1>useMemo</h1>
      <p>The count is : {count}</p>
      <p>The min-count is : {mincount}</p>
      <p>{multi}</p>
      <button
        style={custom_memo.a}
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increament
      </button>
      <button
        style={custom_memo.a}
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        style={custom_memo.a}
        onClick={() => {
          setmincount(mincount * 10);
        }}
      >
        {mincount}
      </button>
      <p>
        The React useMemo Hook returns a memoized value. Think of memoization as
        caching a value so that it does not need to be recalculated. The useMemo
        Hook only runs when one of its dependencies update. This can improve
        performance.The useMemo and useCallback Hooks are similar. The main
        difference is that useMemo returns a memoized value and useCallback
        returns a memoized function.
      </p>
    </div>
  );
}

export default Usememo;
