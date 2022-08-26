import { Contact, currentYear } from "./Contact";
import { render, screen } from "@testing-library/react";

test("contact heading should be in the document", () => {
  render(<Contact />);
  expect(screen.getByText(/Let's connect/)).toBeInTheDocument();
});

describe("should navigate to social media links", () => {
  test("navigates to codergirl1991 twitter page", () => {
    render(<Contact />);

    expect(screen.getByText("Twitter").closest("a")).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByText("Twitter").closest("a")).toHaveAttribute(
      "href",
      "https://twitter.com/codergirl1991"
    );
  });

  test("navigates to jdwilkin4 GitHub page", () => {
    render(<Contact />);

    expect(screen.getByText("GitHub").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/jdwilkin4"
    );
    expect(screen.getByText("GitHub").closest("a")).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  test("navigates to Jessica Wilkins linkedin page", () => {
    render(<Contact />);

    expect(screen.getByText("LinkedIn").closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jessica-wilkins-developer"
    );
    expect(screen.getByText("LinkedIn").closest("a")).toHaveAttribute(
      "target",
      "_blank"
    );
  });
});

test("should render correct current year", () => {
  render(<Contact />);
  expect(currentYear).toEqual(new Date().getFullYear());
});
