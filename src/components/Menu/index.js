import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./styles.css";

import Button from "../Button";
import LampButton from "../LampButton";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Estrongflix logo" />
      </Link>
      <LampButton />
      <Button as={Link} className="ButtonLink" />
    </nav>
  );
}

export default Menu;
