import { render, screen } from "@testing-library/react";
import { TipButton } from ".";

describe("TipButton Component", () => {
  test("renders TipButton with correct title", () => {
    render(
      <TipButton title="10%" value={10} active={false} setValue={() => {}} />
    );
    const buttonElement = screen.getByRole("button", { name: /Tip 10%/i });
    expect(buttonElement).toBeInTheDocument();
    const spanElement = screen.getByText(/10%/i);
    expect(spanElement).toBeInTheDocument();
  });
});
