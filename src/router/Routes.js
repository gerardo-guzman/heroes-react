import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { PrivateRoute } from './Private.routes';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './Public.routes';

export const Routes = () => {

  const {user} = useContext(AuthContext);

  return (
      <Router>
        <div>
          <Switch>
            <PublicRoute 
              exact path="/login" 
              component={ LoginScreen } 
              isAuth={user.logged}
            />
            <PrivateRoute
              isAuth={user.logged} 
              path="/" 
              component={ DashboardRoutes } 
            />
          </Switch>
        </div>
      </Router>
  )
}
