import { useCallback, useEffect, useState } from "react";
import { GetInvoiceByNumber } from "../../../../services";
import { InvoiceItem } from "../../../../services/mock";

export function useInvoiceItem(invoiceNumber: string) {
  const [data, setData] = useState<InvoiceItem | null>(null);
  const [loading, setLoading] = useState(false);
  const getInvoiceItem = useCallback(async (_invoiceNumber: string) => {
    setLoading(true);
    try {
      const res = await GetInvoiceByNumber(_invoiceNumber);

      setData(res);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getInvoiceItem(invoiceNumber);
  }, [invoiceNumber, getInvoiceItem]);

  return {
    data,
    loading,
  };
}
