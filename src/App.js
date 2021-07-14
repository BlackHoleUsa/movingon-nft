import React from "react";
import './App.css';

import { Switch, withRouter, Redirect } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import PublicRoute from './Routes/public.routes';
import MainLayout from "./hoc/Layout/Layout";

import Dashboard from './screens/Dashboard/Dashboard';
import Main from './screens/Main/Main';
import Connect from "./screens/Connect/Connect";

const Shajuanda = (props) => {

  const { history: { location } } = props;

  return(

    <Switch>

      { location?.pathname === "/" && <Redirect exact to={`/${Routes.main}`} /> }

      <MainLayout>
        
        <PublicRoute exact={true} path={`/${Routes.main}`} component={Main} restricted={true} />
        <PublicRoute exact={true} path={`/${Routes.dashboard}`} component={Dashboard} restricted={true} />
        <PublicRoute exact={true} path={`/${Routes.connect}`} component={Connect} restricted={true} />

      </MainLayout>
    </Switch>

  );

}

export default withRouter(Shajuanda);
