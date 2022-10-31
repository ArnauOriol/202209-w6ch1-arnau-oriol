import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives 'DELETE'", () => {
    test("Then it should show a button with 'DELETE'", () => {
      const text = "DELETE";
      const action = () => {};

      render(<Button text={text} action={action} />);
      const button = screen.queryByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action", () => {
    test("Then it should call the action received", async () => {
      const buttonAction = jest.fn();
      const text = "TESTING";

      render(<Button text={text} action={buttonAction} />);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
