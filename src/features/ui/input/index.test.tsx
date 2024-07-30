import { render, screen } from "@testing-library/react";
import { BillInput } from ".";

describe("BillInput Component", () => {
  test("renders BillInput with correct label and placeholder", () => {
    render(<BillInput />);

    const labelElement = screen.getByLabelText(/Bill/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("0");
    expect(inputElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("Dollar sign icon");
    expect(imgElement).toBeInTheDocument();
  });

  test("input should be type number", () => {
    render(<BillInput />);

    const inputElement = screen.getByLabelText(/Bill/i);
    expect(inputElement).toHaveAttribute("type", "number");
  });
});
