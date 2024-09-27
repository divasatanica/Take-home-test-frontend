import classnames from "classnames";
import { NavLink } from "react-router-dom";
import Style from "./index.module.css";

export function Nav() {
  return (
    <nav className={classnames(Style.nav, "px-4", "md:px-8", "lg:px-16")}>
      <NavLink className={Style.navLink} to="/list">
        Invoices
      </NavLink>
    </nav>
  );
}
