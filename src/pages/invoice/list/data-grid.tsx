import { useCallback, useEffect, useMemo, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { GetInvoiceList } from "../../../services";
import { InvoiceItem } from "../../../services/mock";

export function InvoiceTable() {
  const [list, setList] = useState<InvoiceItem[]>([]);
  const [loading, setLoading] = useState(false);
  const getList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await GetInvoiceList();

      setList(res.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  const columns = useMemo<GridColDef<InvoiceItem>[]>(() => {
    return [
      {
        field: "invoiceNumber",
        headerName: "Invoice Number",
        minWidth: 100,
        flex: 1,
      },
      {
        field: "clientId",
        headerName: "Client Name",
        minWidth: 80,
        flex: 1,
      },
      {
        field: "totalAmountDue",
        headerName: "Total Amount Due",
        minWidth: 80,
        flex: 1,
        renderCell(params) {
          const { row } = params;
          const { lineItems } = row;

          return lineItems.reduce((acc, curr) => acc + Number(curr.price), 0);
        },
      },
      {
        field: "dueDate",
        headerName: "Due Date",
        minWidth: 80,
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        minWidth: 50,
        flex: 1,
        renderCell(params) {
          const { value } = params;

          return value;
        },
      },
    ];
  }, []);

  return (
    <DataGrid
      columns={columns}
      loading={loading}
      rows={list}
      getRowId={(record) => record.invoiceNumber}
    />
  );
}
