import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/context.jsx"; // Import AppProvider
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false}/>
  <Provider store={store} >
   <AppProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AppProvider>
    </Provider>  
    </QueryClientProvider>
  </BrowserRouter>
);