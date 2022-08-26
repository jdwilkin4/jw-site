import { ErrorMessage } from "./ErrorMessage";
import { screen, render } from "@testing-library/react";

describe("error message heading and paragraph text", () => {
  test("should render heading", () => {
    render(<ErrorMessage />);
    expect(screen.getByText("Error!")).toBeInTheDocument();
  });

  test("should render paragraph text", () => {
    render(<ErrorMessage />);
    expect(screen.getByText("Content failed to load")).toBeInTheDocument();
  });
});
