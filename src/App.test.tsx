import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("renders the logo with correct alt text", () => {
    render(<App />);
    const logo = screen.getByAltText("Project Logo");
    expect(logo).toBeInTheDocument;
  });
});
