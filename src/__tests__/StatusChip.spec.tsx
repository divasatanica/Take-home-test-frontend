import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { StatusChip } from "../pages/invoice/_components/StatusChip";

describe("Test StatusChip", () => {
  test("Should display the status", () => {
    render(<StatusChip status="Overdue" />);
    expect(screen.getByTestId("status")).toHaveTextContent("Overdue");
    cleanup();
    render(<StatusChip status="Pending" />);
    expect(screen.getByTestId("status")).toHaveTextContent("Pending");
  });
});
