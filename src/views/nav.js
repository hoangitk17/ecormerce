import React from "react";
const Home = React.lazy(() => import("./Home"));
const Setting = React.lazy(() => import("./Setting"));
const Login = React.lazy(() => import("./Login"));
const NotFound = React.lazy(() => import("./NotFound"));

function wrapSuspense(component) {
  return <React.Suspense fallback={<>...</>}>{component}</React.Suspense>;
}

const routes = [
  {
    id: 1,
    path: "/setting",
    element: wrapSuspense(<Setting />),
    exact: true,
  },
  {
    id: 2,
    path: "/login",
    element: wrapSuspense(<Login />),
    exact: true,
  },
  {
    id: 0,
    path: "/",
    element: wrapSuspense(<Home />),
    exact: true,
  },
  {
    id: -1,
    path: "*",
    element: wrapSuspense(<NotFound />),
    exact: false,
  },
];

export default routes;
