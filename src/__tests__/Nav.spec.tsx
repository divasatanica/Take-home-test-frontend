import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Nav } from "../components/Nav";
import { MemoryRouter } from "react-router-dom";

describe("Test Nav", () => {
  test("Should have a menu item named 'Invoices'", () => {
    render(<Nav />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByTestId("nav")).toHaveTextContent("Invoices");
  });
});
