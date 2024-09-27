import { useParams } from "react-router-dom";
import { useInvoiceItem } from "./hooks/use-invoice-item";
import { Button, CircularProgress, List, ListItem, Paper } from "@mui/material";
import { InvoiceItem } from "../../../services/mock";
import { useClientMap } from "../list/hooks/use-client-data";
import { StatusChip } from "../_components/StatusChip";
import Style from "./index.module.css";
import { renderChaseDialog } from "./components/chase-dialog";

export default function InvoiceDetail() {
  const { id } = useParams();
  const { data, loading } = useInvoiceItem(id || "");
  const { clientMap } = useClientMap();

  const NonNullData = (data || {}) as InvoiceItem;
  const client = clientMap[NonNullData.clientId] || {};
  return (
    <div className="">
      <header className="mb-6">
        <span className="text-xl">Invoices Detail</span>
      </header>
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper>
          <div className="flex justify-between flex-wrap">
            <List className="flex-1">
              <ListItem className={Style.listItem}>
                <section>
                  <section className="text-xl font-bold">
                    Invoice Number
                  </section>
                  <section>{NonNullData.invoiceNumber}</section>
                </section>
              </ListItem>
              <ListItem className={Style.listItem}>
                <section>
                  <section className="text-xl font-bold">Client</section>
                  <section>{client.name}</section>
                  <section className="text-slate-500">{client.address}</section>
                  <section className="text-slate-500">{client.email}</section>
                </section>
              </ListItem>
              <ListItem className={Style.listItem}>
                <section>
                  <section className="text-xl font-bold">Items</section>
                  <section>
                    <List>
                      {NonNullData.lineItems?.map((item) => {
                        return (
                          <ListItem key={item.description}>
                            <section>{item.description} - </section>
                            <section>
                              ${item.price} * {item.quantity}
                            </section>
                          </ListItem>
                        );
                      })}
                    </List>
                  </section>
                </section>
              </ListItem>
            </List>
            <List className="flex-1">
              <ListItem className={Style.listItem}>
                <section>
                  <section className="text-xl font-bold">Due Date</section>
                  <section>{NonNullData.dueDate}</section>
                </section>
              </ListItem>
              <ListItem className={Style.listItem}>
                <section>
                  <section className="text-xl font-bold">Status</section>
                  <section>
                    <StatusChip status={NonNullData.status} />
                  </section>
                </section>
              </ListItem>
              {NonNullData.status === "Overdue" ? (
                <ListItem className={Style.listItem}>
                  <section>
                    <section className="text-xl font-bold">Action</section>
                    <section className="mt-2">
                      <Button
                        variant="contained"
                        onClick={() =>
                          renderChaseDialog({
                            invoice: NonNullData,
                            client: client,
                          })
                        }
                      >
                        Chase
                      </Button>
                    </section>
                  </section>
                </ListItem>
              ) : null}
            </List>
          </div>
        </Paper>
      )}
    </div>
  );
}
