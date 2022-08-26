import { Articles } from "./Articles";
import { screen, render } from "@testing-library/react";

const publicationLinks: { linkText: string; hrefValue: string }[] = [
  {
    linkText: "freeCodeCamp News",
    hrefValue: "https://www.freecodecamp.org/news/author/jessica-wilkins/",
  },
  {
    linkText: "This Dot Labs",
    hrefValue: "https://www.thisdot.co/author/-jessica-wilkins",
  },
  {
    linkText: "Gatsby Blog",
    hrefValue: "https://www.gatsbyjs.com/contributors/jessica-wilkins",
  },
];

describe("should contain header text", () => {
  test("should render Top articles", () => {
    render(<Articles />);
    const headingText = screen.getByText("Top Articles");
    expect(headingText).toBeInTheDocument();
  });
});

describe("external author pages", () => {
  test.each(publicationLinks)("should render each author page link", (link) => {
    render(<Articles />);
    const text = screen.getByText(link.linkText);
    expect(text).toHaveAttribute("href", link.hrefValue);
  });
});
