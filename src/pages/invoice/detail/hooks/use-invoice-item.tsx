import { useCallback, useEffect, useState } from "react";
import { GetInvoiceByNumber } from "../../../../services";
import { InvoiceItem } from "../../../../services/mock";

export function useInvoiceItem(invoiceNumber: string) {
  const [data, setData] = useState<InvoiceItem | null>(null);
  const getInvoiceItem = useCallback(async (_invoiceNumber: string) => {
    const res = await GetInvoiceByNumber(_invoiceNumber);

    setData(res);
  }, []);

  useEffect(() => {
    getInvoiceItem(invoiceNumber);
  }, [invoiceNumber, getInvoiceItem]);

  return {
    data,
  };
}
