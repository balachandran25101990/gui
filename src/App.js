import React, { Component, lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ProtectedRoute } from "./common/ProtectedRoute"

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const PasswordResetPage = lazy(() => import('./pages/PasswordResetPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const CreateStoryPage = lazy(() => import('./pages/CreateStoryPage'));
const ManageStoriesPage = lazy(() => import('./pages/ManageStoriesPage'));

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/reset" component={PasswordResetPage} />
              <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
              <ProtectedRoute exact path="/createStory" component={CreateStoryPage} />
              <ProtectedRoute exact path="/manageStory" component={ManageStoriesPage} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    )
  }
}
