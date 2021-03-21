import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Spinner from "./components/UI/Spinner/Spinner";

const App = lazy(() => import("./App"));

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <React.StrictMode>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
}
