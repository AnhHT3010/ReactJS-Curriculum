import { useState } from "react";
// Khi tăng lên 15 thì Ẩn nút ➕ đi
// Thực hiện tạo 2 nút để Ẩn/Hiện giá trị của biến count và các nút tăng giảm giá trị của biến count

const Counter = () => {
  const [count, setCount] = useState(2);
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
      {count > 0 && (
        <button
          onClick={function () {
            setCount(count - 1);
          }}
        >
          ➖
        </button>
      )}
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
