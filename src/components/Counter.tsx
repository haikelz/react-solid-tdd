import { useCount } from "../hooks";

export default function Counter() {
  const { count, increment, decrement, multiply, divide, reset } = useCount();

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <div>
        <button data-testid="increment" onClick={increment}>
          Increment
        </button>
        <button data-testid="decrement" onClick={decrement}>
          Decrement
        </button>
        <button data-testid="multiply" onClick={() => multiply(2)}>
          Multiply
        </button>
        <button data-testid="divide" onClick={() => divide(2)}>
          Divide
        </button>
        <button data-testid="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
