import { Dialog, DialogTitle, Paper } from "@mui/material";
import { ClientItem, InvoiceItem } from "../../../../services/mock";
import { create, register, show, useModal } from "@ebay/nice-modal-react";
import { useMemo } from "react";

interface IProps {
  invoice: InvoiceItem;
  client: ClientItem;
}

const ChaseEmailDialog = create((props: IProps) => {
  const { invoice, client } = props;
  const modal = useModal();
  const totalAmount = useMemo(
    () => invoice.lineItems.reduce((acc, curr) => acc + curr.price, 0),
    [invoice]
  );

  return (
    <Dialog
      open={modal.visible}
      onClose={() => {
        modal.hide();
        modal.remove();
      }}
    >
      <DialogTitle>
        <span>Chase Email Preview</span>
      </DialogTitle>
      <Paper className="p-6">
        <article>
          <section>
            <p>Dear {client.name},</p>
          </section>
          <section className="mt-6">
            <p>Is everything going well?</p>
            <p>
              We have noticed that you have an unpaid invoice (
              <span className="font-bold">{invoice.invoiceNumber}</span>) with
              <span className="font-bold"> ${totalAmount}</span>. Its due date
              is <span className="font-bold">{invoice.dueDate}</span>
            </p>
            <p>
              Please make sure you pay this invoice before the due date, Thanks.
            </p>
          </section>
          <section className="mt-6">
            <p>Best Regards,</p>
            <p>Attelas Team</p>
          </section>
        </article>
      </Paper>
    </Dialog>
  );
});

const id = "chase-dialog";
register(id, ChaseEmailDialog);

export const renderChaseDialog = (props: IProps) =>
  show<void, IProps>(id, props);
