import { HeroSection } from "./HeroSection.stories";
import { render, screen } from "@testing-library/react";

describe("Hero Section", () => {
  test("should contain Jessica Wilkins", () => {
    render(<HeroSection />);
    expect(screen.getByText("Jessica Wilkins")).toBeInTheDocument();
  });

  test("should contain title", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("Software Engineer | Technical Writer")
    ).toBeInTheDocument();
  });
});
