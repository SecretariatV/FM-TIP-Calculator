import { render, screen } from "@testing-library/react";
import TipPanel, { buttons } from ".";
import { ITipDataProps } from "..";
import { vi } from "vitest";

const mockData: ITipDataProps = {
  person: 0,
  bill: 0,
  tip: 0,
};

const mockSetData = vi.fn();

describe("TipPanel Component", () => {
  test("renders TipPanel with correct title", () => {
    render(<TipPanel data={mockData} setData={mockSetData} />);

    const titleElement = screen.getByText(/Select Tip %/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders all TipButton components with correct titles", () => {
    render(<TipPanel data={mockData} setData={mockSetData} />);

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(5);

    buttons.forEach((button) => {
      const buttonElement = screen.getByLabelText(`Tip ${button.value}%`);
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
