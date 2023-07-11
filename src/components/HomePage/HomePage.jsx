import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import Search from "../Search/Search";
import Bloc from "../Bloc/Bloc";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


function HomePage(data) {
  return (
        <div className="fr-router">
          <Breadcrumbs />
          <Search />
          <Bloc props={data} />
        </div>
  );
}

export default HomePage;
