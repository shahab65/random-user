import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../index";

test("renders button content", () => {
  render(<Button>submit</Button>);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement.textContent).toBe("submit");
});

test("runs onclick event", () => {
  const onClick = jest.fn();

  render(<Button onClick={onClick}>submit</Button>);
  const buttonElement = screen.getByTestId("button");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalled();
});
