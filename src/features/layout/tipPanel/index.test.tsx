import { render, screen } from "@testing-library/react";
import TipPanel, { buttons } from ".";

describe("TipPanel Component", () => {
  test("renders TipPanel with correct title", () => {
    render(<TipPanel />);

    const titleElement = screen.getByText(/Select Tip %/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders all TipButton components with correct titles", () => {
    render(<TipPanel />);

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(5);

    buttons.forEach((button) => {
      const buttonElement = screen.getByLabelText(`Tip ${button.value}%`);
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
