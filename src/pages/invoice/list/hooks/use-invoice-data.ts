import { useCallback, useEffect, useState } from "react";
import { InvoiceItem } from "../../../../services/mock";
import { GetInvoiceList } from "../../../../services";

export function useInvoiceData() {
  const [list, setList] = useState<InvoiceItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const getList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await GetInvoiceList();

      setList(res.data || []);
      setTotal((res.pagination.total || 0) / res.pagination.page_size);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  return {
    list,
    loading,
    totalPage: total,
    run: getList,
  };
}
