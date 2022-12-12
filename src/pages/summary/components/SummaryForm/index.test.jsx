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

  test("popover test", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox", { name: "약관동의" });
    const nullPopover = screen.queryByText(
      "주문을 완료해도 배달되지 않습니다."
    );
    expect(nullPopover).not.toBeInTheDocument();

    await user.hover(checkbox);
    const popover = screen.queryByText("주문을 완료해도 배달되지 않습니다.");
    expect(popover).toBeInTheDocument();
  });
});
