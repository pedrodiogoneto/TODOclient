import React, { lazy } from 'react'

const NoteView = React.lazy(() => import("../views/NoteView"));
const Error404 =  React.lazy(() => import("../views/Error404"))

const indexRoutes = [
  { exact: "true", path: "/", name: "NoteView", component: NoteView},
  { path: "/", name: "Error404", component: Error404 },
];

export default indexRoutes;
