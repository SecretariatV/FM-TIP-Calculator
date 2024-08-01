import { fireEvent, render, screen } from "@testing-library/react";
import { CustomInput } from ".";
import { ITipDataProps } from "@features/layout";
import { vi } from "vitest";

const mockData: ITipDataProps = {
  person: 0,
  bill: 0,
  tip: 0,
};

const mockSetData = vi.fn();

describe("CustomInput Component", () => {
  it("renders CustomInput with correct label", () => {
    render(<CustomInput data={mockData} setData={mockSetData} />);

    const labelElement = screen.getByLabelText(/Custom Input/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("updates value on input change", () => {
    render(<CustomInput data={mockData} setData={mockSetData} />);
    const inputElement = screen.getByLabelText(/Custom Input/i);
    fireEvent.change(inputElement, { target: { value: "123" } });
    expect(inputElement).toHaveValue(123);
  });
});
