import React from "react";
import "./navbar.scss"

const pages = [
  "Venta",
  "Alquileres",
  "Alquileres temporarios",
  "Emprendimientos",
  "Nosotros",
  "Contacto",
];

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <p>logo</p>
      </div>
      <div className="nav">
        <ul className="nav_list">
          {pages.map((page) => {
            return (<li key={page} className="nav_item"> {page} </li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
