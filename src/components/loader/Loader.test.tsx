import { Loader } from "./Loader";
import { screen, render } from "@testing-library/react";

describe("loader component", () => {
  test("should render loading text", () => {
    render(<Loader />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
