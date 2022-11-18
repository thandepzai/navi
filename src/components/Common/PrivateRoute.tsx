import * as React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  // Check if user islogged in
  // if yes, show routes
  const isloggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isloggedIn) return <Navigate to={'/login'} />;
  return <Navigate to={'/admin'}/>
  // ddoanj nay em quen router
}
