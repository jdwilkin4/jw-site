import { About } from "./About";
import { render, screen } from "@testing-library/react";
import profilePic from "../../images/jw-profile.webp";

describe("About section", () => {
  test("about heading should be in document", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });
});

describe("About profile image", () => {
  test("profile image should have src and alt attributes", () => {
    render(<About />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", profilePic);
    expect(img).toHaveAttribute("alt", "Jessica Wilkins head shot");
  });
});
