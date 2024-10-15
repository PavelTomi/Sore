import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux"

import "./styles/styles/index.css";

import { store } from "./features/store";

import App from "./components/App/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
]);


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

