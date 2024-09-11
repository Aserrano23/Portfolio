import { T } from "@tolgee/react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = ({ ToggleModal }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-default" role="navigation">
      <ul className="nav navbar-nav">
        <li className="navbar-img wow flipInX" onClick={() => navigate("/")}>
          <div className="logo-navbar-circle">
            <img
              src="/assets/images/logo512.png"
              width="50"
              alt="Adrian Serrano Web developer Desarrollador web castellon"
            />
          </div>
        </li>
      </ul>
      <ul className="row nav navbar-nav navbar-right wow fadeInDown">
        <div className="col-6 end">
          <a href="/#contact" className="as-btn-outline-white">
            <T keyName="contact" />
          </a>
        </div>
        <div className="col-6">
          <button
            className="as-btn-outline-white"
            onClick={() => {
              ToggleModal();
            }}
          >
            <T keyName="lang" />
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
