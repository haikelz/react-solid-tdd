import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const multiply = (num: number) => setCount((prev) => prev * num);
  const divide = (num: number) => setCount((prev) => prev / num);
  const reset = () => setCount(0);

  return { count, setCount, increment, decrement, multiply, divide, reset };
}
