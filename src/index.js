import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Sentry
Sentry.init({
  dsn: "https://b991b93ba35045ffbb1cba8381e9294c@o4504211653853184.ingest.sentry.io/4504303057305600",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
