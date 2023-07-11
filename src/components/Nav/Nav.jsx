import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {normalizeString} from "../../Helpers/Convert"

import "./Nav.scss";

function Nav(data) {

  const newData=data.props;
  if (Array.isArray(newData.props)) {
    return (
      <div className="container">
        <div className="fr-nav">
          <ul className="menu">
            <li>
            <Link to="/">Accueil</Link>
            </li>
            {newData.props.map((item, index) => (
              <li key={index}>
                <a href="#">{item.nomenclature.libelle}</a>
                <ul class="sub-menu">
                  <li className="btn-sommaire">
                  <Link  to={`/sommaire/${normalizeString(item.nomenclature.libelle)}`}>Sommaire</Link>
                  </li>
                  {item.nomenclature.children.map((key, index) => {
                    return (
                      <li key={index}>
            <Link  to={`/detail-search/${normalizeString(item.nomenclature.libelle)}/${key.libelle}`}>{key.libelle}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
