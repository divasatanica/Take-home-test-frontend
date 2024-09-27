import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Pagination,
  Paper,
  CircularProgress,
  Button,
} from "@mui/material";
import { useInvoiceData } from "./hooks/use-invoice-data";
import { useClientMap } from "./hooks/use-client-data";
import { useNavigate } from "react-router-dom";
import { StatusChip } from "../_components/StatusChip";

export function InvoiceTable() {
  const { list, totalPage: total, loading, run: getList } = useInvoiceData();
  const { clientMap } = useClientMap();
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <span className="font-bold">Invoice Number</span>
            </TableCell>
            <TableCell>
              <span className="font-bold">Client Name</span>
            </TableCell>
            <TableCell>
              <span className="font-bold">Total Amount Due</span>
            </TableCell>
            <TableCell>
              <span className="font-bold">Due Date</span>
            </TableCell>
            <TableCell>
              <span className="font-bold">Actions</span>
            </TableCell>
          </TableRow>
        </TableHead>

        {loading ? (
          <div className="p-10 flex justify-center items-center w-full">
            <CircularProgress />
          </div>
        ) : (
          <TableBody>
            {list.map((item) => {
              return (
                <TableRow key={item.invoiceNumber} className="text-slate-600">
                  <TableCell>
                    <span className="mr-2">{item.invoiceNumber}</span>
                    <StatusChip status={item.status} />
                  </TableCell>
                  <TableCell>
                    <section>
                      <span className="font-bold text-slate-600">
                        {clientMap[item.clientId]?.name || item.clientId}
                      </span>
                    </section>
                    <section>
                      <span className="text-slate-400">
                        {clientMap[item.clientId]?.address || ""}
                      </span>
                    </section>
                    <section>
                      <span className="text-slate-400">
                        {clientMap[item.clientId]?.email || ""}
                      </span>
                    </section>
                  </TableCell>
                  <TableCell>
                    <span>
                      $
                      {item.lineItems.reduce(
                        (acc, curr) => acc + Number(curr.price),
                        0
                      )}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span>{item.dueDate}</span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate(`/detail/${item.invoiceNumber}`);
                      }}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
      <div className="p-4 w-full flex justify-end">
        <Pagination
          count={total}
          onChange={() => {
            getList();
          }}
        />
      </div>
    </TableContainer>
  );
}
