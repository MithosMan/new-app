import React from 'react';
import Widget from './CartWidget';
import atlas from "../img/atlas.png";
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

const Navegacion = () => {
  return (
<header className="">
  <div>
<img src={atlas} className=""></img>
      <h1 className=""><NavLink to="/">ATLAS MITOLOGICO</NavLink></h1>
      </div>

      <ul className="">
        <li><NavLink to="/categoria/bestias" className="">Bestiario</NavLink></li>
        <li><NavLink to="/categoria/historias" className="">Historias</NavLink></li>
        <li><NavLink to="/categoria/objetos" className="">Artefactos</NavLink></li>
      </ul>

      <div className="col-4 text-end">
      <Widget/>
        <button type="button" className="">Login</button>
        <button type="button" className="">Sign-up</button>
      </div>
    </header>
  );
}

export default Navegacion;