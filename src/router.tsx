import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

const HomeIndex = lazy(() =>
  import("./pages/home").then((res) => ({ default: res.default }))
);
const InvoiceList = lazy(() =>
  import("./pages/invoice/list").then((res) => ({ default: res.default }))
);
const InvoiceDetail = lazy(() =>
  import("./pages/invoice/detail").then((res) => ({
    default: res.default,
  }))
);

const Fallback = () => <span>Loading...</span>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
      {
        path: "/list",
        element: (
          <Suspense fallback={<Fallback />}>
            <InvoiceList />
          </Suspense>
        ),
      },
      {
        path: "/detail/:id",
        element: (
          <Suspense fallback={<Fallback />}>
            <InvoiceDetail />
          </Suspense>
        ),
      },
    ],
  },
]);
