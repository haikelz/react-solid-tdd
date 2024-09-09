import { useCount } from "../hooks";

export default function Counter() {
  const { count, increment, decrement, multiply, divide, reset } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => multiply(2)}>Multiply</button>
        <button onClick={() => divide(2)}>Divide</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
