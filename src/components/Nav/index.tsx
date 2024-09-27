import classnames from "classnames";
import { NavLink } from "react-router-dom";
import Style from "./index.module.css";

export function Nav() {
  return (
    <nav
      data-testid="nav"
      className={classnames(Style.nav, "px-4", "md:px-8", "lg:px-16")}
    >
      <NavLink
        data-testid="invoice-list-link"
        className={Style.navLink}
        to="/list"
      >
        Invoices
      </NavLink>
    </nav>
  );
}
