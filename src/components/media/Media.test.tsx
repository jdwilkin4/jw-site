import { Media } from "./Media";
import { screen, render } from "@testing-library/react";

describe("Media header text", () => {
  test("should render heading", () => {
    render(<Media />);
    expect(screen.getByText("Media")).toBeInTheDocument();
  });
});
