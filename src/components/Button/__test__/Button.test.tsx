import { render, screen } from "@testing-library/react";
import Button from "../index";

test("renders button content", () => {
  render(<Button>submit</Button>);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement.textContent).toBe("submit");
});
