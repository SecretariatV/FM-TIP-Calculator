import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DetailView } from "./";

describe("DetailView Component", () => {
  it("renders DetailView with correct title, detail, and amount", () => {
    render(<DetailView title="Tip Amount" amount={23.45} />);

    const titleElement = screen.getByText("Tip Amount");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute("aria-label", "Detail Title");

    const detailElement = screen.getByText("/ person");
    expect(detailElement).toBeInTheDocument();

    const amountElement = screen.getByText("$23.45");
    expect(amountElement).toBeInTheDocument();
    expect(amountElement).toHaveAttribute("aria-label", "Amount");
  });

  it("formats amount to two decimal places", () => {
    render(<DetailView title="Total" amount={100} />);

    const amountElement = screen.getByText("$100.00");
    expect(amountElement).toBeInTheDocument();
  });
});
