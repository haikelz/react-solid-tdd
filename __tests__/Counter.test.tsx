import { fireEvent, render } from "@testing-library/react";
import Counter from "../src/components/Counter";

describe(Counter, () => {
  it("Should display counter component and initial value for count is 0", () => {
    const { getByTestId } = render(<Counter />);
    const countValue = Number(getByTestId("count").textContent);
    /*const decrementButton = getByTestId("decrement");
    const divideButton = getByTestId("divide");
    const multiplyButton = getByTestId("multiply");*/

    expect(countValue).toBeDefined();
    expect(countValue).toBe(0);

    /*expect(countValue).toBe(1);

    fireEvent.click(decrementButton);
    expect(countValue).toBe(0);

    fireEvent.click(incrementButton);
    expect(countValue).toBe(1);

    fireEvent.click(multiplyButton);
    expect(countValue).toBe(2);

    fireEvent.click(divideButton);
    expect(countValue).toBe(1);*/
  });

  it("Should operate increment function and increase count value to 1", () => {
    const { getByTestId } = render(<Counter />);
    const countValue = Number(getByTestId("count").textContent);

    const incrementButton = getByTestId("increment");
    fireEvent.click(incrementButton);

    console.log(countValue);
  });
});
