"use client";

import { createContext, useContext, useEffect, useState } from "react";

export function BootstrapConnect() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return null;
}

export const Contextcount = createContext();
// const =useContext()
export const Contextprovider = ({ children }) => {
  const [count, setcount] = useState(0);
  return (
    <Contextcount.Provider value={{ count, setcount }}>
      {children}
    </Contextcount.Provider>
  );
};

// counter
export const Counter = () => {
  const { count, setcount } = useContext(Contextcount);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return (
    <>
      <button
        className="btn btn-primary px-3"
        onWheel={decrement}
        onClick={decrement}
      >
        -
      </button>
      <label className="px-3 border m-2 text-center" style={{ width: "70px" }}>
        {count}
      </label>
      <button
        className="btn btn-primary px-3"
        onClick={increment}
        onWheel={increment}
      >
        +
      </button>
    </>
  );
};
