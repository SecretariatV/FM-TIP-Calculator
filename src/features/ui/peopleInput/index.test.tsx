import { fireEvent, render, screen } from "@testing-library/react";
import { PeopleInput } from ".";
import { ITipDataProps } from "@features/layout";
import { vi } from "vitest";

const mockData: ITipDataProps = {
  person: 0,
  bill: 0,
  tip: 0,
};

const mockSetData = vi.fn();

describe("PeopleInput Component", () => {
  it("renders PeopleInput with correct label and placeholder", () => {
    render(<PeopleInput data={mockData} setData={mockSetData} />);

    const labelElement = screen.getByText(/Number of People/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("0");
    expect(inputElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("Person Icon");
    expect(imgElement).toBeInTheDocument();
  });

  it("displays error message when person count is zero", () => {
    render(<PeopleInput data={mockData} setData={mockSetData} />);
    const errorMessage = screen.getByText("Can't be zero");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute("role", "alert");
  });

  it("calls setData with correct value on input change", () => {
    render(<PeopleInput data={mockData} setData={mockSetData} />);

    const inputElement = screen.getByLabelText(/Number of People/i);
    fireEvent.change(inputElement, { target: { value: "5" } });

    expect(inputElement).toHaveAttribute("type", "number");
    expect(mockSetData).toHaveBeenCalledWith(expect.any(Function));
    expect(mockSetData).toHaveBeenCalledTimes(1);

    mockSetData.mock.calls[0][0]((prevData: ITipDataProps) => {
      expect(prevData).toEqual(mockData);
      return { ...prevData, person: 5 };
    });
  });

  it("sets aria-invalid and aria-describedby correctly", () => {
    render(<PeopleInput data={mockData} setData={mockSetData} />);

    const inputElement = screen.getByPlaceholderText("0");
    expect(inputElement).toHaveAttribute("aria-invalid", "true");
    expect(inputElement).toHaveAttribute("aria-describedby", "people-error");

    fireEvent.change(inputElement, { target: { value: "5" } });
  });
});
