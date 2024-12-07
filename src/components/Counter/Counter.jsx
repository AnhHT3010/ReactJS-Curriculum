import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  console.log("render: ", count);
  return (
    <>
      <div>Counter: {count}</div>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        ➕
      </button>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        ➖
      </button>
      <button
        onClick={function () {
          setCount(0);
        }}
      >
        🔃
      </button>
    </>
  );
};

export default Counter;
