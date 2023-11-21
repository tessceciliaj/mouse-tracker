import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("Page title, subtitle, and count are rendered.", () => {
  render(<Header title="Let the clickathon begin!" initialCount={0} />);

  const pageTitle = screen.getByRole("heading", { level: 1 });
  const subTitle = screen.getByRole("heading", { level: 3 });
  const countValue = screen.getByTestId("count");

  expect(pageTitle).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
  expect(countValue).toHaveTextContent("0");
});
