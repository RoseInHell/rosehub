import React from 'react';
import { Redirect } from 'react-router-dom';

const LSHome = React.lazy(() => import("@/pages/home"));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/home"/>
    )
  },
  {
    path: "/home",
    component: LSHome
  }
]

export default routes;