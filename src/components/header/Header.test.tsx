import { Header } from "./Header";
import { render } from "@testing-library/react";

test("header component should render without crashing", () => {
  render(<Header />);
});
