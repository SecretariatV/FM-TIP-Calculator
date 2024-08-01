import { fireEvent, render, screen } from "@testing-library/react";
import { CustomInput } from ".";

describe("CustomInput Component", () => {
  it("renders CustomInput with correct label", () => {
    render(<CustomInput />);

    const labelElement = screen.getByLabelText(/Custom Input/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("updates value on input change", () => {
    render(<CustomInput />);
    const inputElement = screen.getByLabelText(/Custom Input/i);
    fireEvent.change(inputElement, { target: { value: "123" } });
    expect(inputElement).toHaveValue(123);
  });
});
