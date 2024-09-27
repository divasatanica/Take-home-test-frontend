import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
import { useInvoiceData } from "../pages/invoice/list/hooks/use-invoice-data";

describe("Test UseInvoiceData", () => {
  test("Should fetch invoices data", async () => {
    const { result } = renderHook(() => useInvoiceData());

    expect(result.current.list.length).toBe(0);
    await waitFor(() => result.current.run());
    expect(result.current.list.length).toBeGreaterThan(0);
  });
});
