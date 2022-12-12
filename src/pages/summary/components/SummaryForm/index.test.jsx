import { render, screen, fireEvent } from "@testing-library/react";

import SummaryForm from "./index";

describe("Summary From Component Test", () => {
  test("initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: "약관동의" });
    const submitButton = screen.getByRole("button", { name: "주문" });

    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });
});
