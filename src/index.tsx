import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./modules/App/App";
import reportWebVitals from "./reportWebVitals";
import Goods from "./modules/Goods/Goods";
import store from "./redux/store";
import ItemInfo from "./modules/Goods/info/ItemInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>ERROR</div>,
    children: [
      {
        path: "/goods",
        element: <Goods />
      },
      {
        path: "/item/:id",
        element: <ItemInfo />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
