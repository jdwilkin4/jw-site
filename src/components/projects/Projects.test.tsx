import { Projects } from "./Projects";
import { render, screen } from "@testing-library/react";
import blackExcellenceImg from "../../images/BEMP-homepage.webp";

describe("Project section heading", () => {
  test("should render heading", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});

describe("Black excellence music project image", () => {
  test("should render image", () => {
    render(<Projects />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", blackExcellenceImg);
    expect(img).toHaveAttribute(
      "alt",
      "Black Excellence Music Project homepage"
    );
  });
});
