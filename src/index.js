import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UIContextProvider } from "./context/UIcontext";
import { InvoiceContextProvider } from "./context/InvoiceContext";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UIContextProvider>
        <InvoiceContextProvider>
          <App />
        </InvoiceContextProvider>
      </UIContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
