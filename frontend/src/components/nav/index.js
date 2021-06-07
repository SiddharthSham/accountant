import { Link } from "react-router-dom";

import "./styles.scss";

export const Nav = () => {
  return (
    <nav id="nav" className="df jcb aib">
      <div id="nav-brand">
        <Link to="/"> Accountant </Link>
      </div>
      <ul id="nav-list" className="df jcs">
        <li className="nav-list--item">
          <Link to="/projects"> Projects </Link>
        </li>
        <li className="nav-list--item">
          <Link to="/clients"> Clients </Link>
        </li>
        <li className="nav-list--item">
          <Link to="/invoices"> Invoices </Link>
        </li>
      </ul>
    </nav>
  );
};
