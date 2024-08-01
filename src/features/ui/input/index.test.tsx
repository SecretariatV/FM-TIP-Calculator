import { render, screen } from "@testing-library/react";
import { BillInput } from ".";
import { ITipDataProps } from "@features/layout";
import { vi } from "vitest";

const mockData: ITipDataProps = {
  person: 0,
  bill: 0,
  tip: 0,
};

const mockSetData = vi.fn();

describe("BillInput Component", () => {
  test("renders BillInput with correct label and placeholder", () => {
    render(<BillInput data={mockData} setData={mockSetData} />);

    const labelElement = screen.getByLabelText(/Bill/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("0");
    expect(inputElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("Dollar sign icon");
    expect(imgElement).toBeInTheDocument();
  });

  test("input should be type number", () => {
    render(<BillInput data={mockData} setData={mockSetData} />);

    const inputElement = screen.getByLabelText(/Bill/i);
    expect(inputElement).toHaveAttribute("type", "number");
  });
});
