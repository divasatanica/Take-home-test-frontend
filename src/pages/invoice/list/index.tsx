import { InvoiceTable } from "./data-table";

export default function InvoiceList() {
  return (
    <div className="">
      <header className="mb-6">
        <span className="text-xl">Invoices List</span>
      </header>
      <InvoiceTable />
    </div>
  );
}
