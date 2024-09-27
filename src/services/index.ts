import { ClientItem, clientList, InvoiceItem, invoiceList } from "./mock";

interface PaginatedList<T> {
  pagination: {
    current: number;
    page_size: number;
    total: number;
  };
  data: T;
}

export async function GetInvoiceList(): Promise<
  PaginatedList<typeof invoiceList>
> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        pagination: {
          current: 1,
          page_size: 20,
          total: 40,
        },
        data: invoiceList,
      });
    }, /* mock random asynchronous time cost */ Math.round(500 * Math.random() + 500));
  });
}

export async function GetInvoiceByNumber(
  invoiceNumber: string
): Promise<InvoiceItem | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        invoiceList.find((item) => item.invoiceNumber === invoiceNumber) ?? null
      );
    }, /* mock random asynchronous time cost */ Math.round(500 * Math.random() + 500));
  });
}

export async function GetClientList(): Promise<ClientItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(clientList);
    }, Math.round(500 * Math.random() + 500));
  });
}
