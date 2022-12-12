import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummaryForm from "./index";

describe("Summary From Component Test", () => {
  test("initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: "약관동의" });
    const submitButton = screen.getByRole("button", { name: "주문" });

    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  test("enabled button after check", async () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: "약관동의" });
    const submitButton = screen.getByRole("button", { name: "주문" });

    const user = userEvent.setup();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    expect(submitButton).toBeEnabled();
  });
});
