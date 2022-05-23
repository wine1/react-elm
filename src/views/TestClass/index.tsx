import React, { useCallback } from "react";

// 在Hooks中获取上一次指定的props
const usePrevProps = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App() {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const handleCount = useCallback(() => setCount(count + 1), []);
  const handleTotal = () => setTotal(total + 1);
  const prevHandleCount = usePrevProps(handleCount);

  console.log('两次处理函数是否相等：', prevHandleCount === handleCount);

  return (
    <div>
      <div>Count is {count}</div>
      <div>Total is {total}</div>
      <br />
      <div>
        <button onClick={handleCount}>Increment Count</button>
        <button onClick={handleTotal}>Increment Total</button>
      </div>
    </div>
  )
}

export default App