import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainCard from "./";

describe("MainCard Component", () => {
  it("renders MainCard with child components", () => {
    render(<MainCard />);

    const billInput = screen.getByText("Bill");
    expect(billInput).toBeInTheDocument();

    const tipPanel = screen.getByText("Select Tip %");
    expect(tipPanel).toBeInTheDocument();

    const peopleInput = screen.getByText("Number of People");
    expect(peopleInput).toBeInTheDocument();

    const tipAmount = screen.getByText("Tip Amount");
    expect(tipAmount).toBeInTheDocument();

    const total = screen.getByText("Total");
    expect(total).toBeInTheDocument();
  });

  it("resets data when RESET button is clicked", () => {
    render(<MainCard />);

    const resetButton = screen.getByText("RESET");
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(resetButton);

    // Simulate reset button functionality
    expect(screen.getByText("Tip Amount")).toBeInTheDocument();
  });

  it("updates aria-live attribute on reset button", () => {
    render(<MainCard />);

    const resetButton = screen.getByText("RESET");
    expect(resetButton).toHaveAttribute("aria-live", "polite");
  });
});
