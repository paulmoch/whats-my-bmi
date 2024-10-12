import Logo from "../img/logo_white.svg";
import Refresh from "../img/refresh.svg";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Header.scss";

let reload = () => {
  window.location.reload();
};

function Header() {
  return (
    <Router>
      <header>
        <img className="logo" src={Logo} alt="logo" />
        <img className="refresh" src={Refresh} onClick={reload} alt="refresh" />
      </header>
    </Router>
  );
}

export default Header;
