import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

describe(Button, () => {
  const BUTTON_TEXT = "Get recipes!";

  it("renders with correct text", () => {
    render(<Button type="button" text={BUTTON_TEXT} />);
    const button = screen.getByText(BUTTON_TEXT);
    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button type="button" text={BUTTON_TEXT} onClick={handleClick} />);
    await userEvent.click(screen.getByText(BUTTON_TEXT));
    expect(handleClick).toHaveBeenCalled();
  });

  it("has the correct type attribute", () => {
    render(<Button type="button" text={BUTTON_TEXT} />);
    const button = screen.getByText(BUTTON_TEXT);
    expect(button).toHaveAttribute("type", "button");
  });
});
