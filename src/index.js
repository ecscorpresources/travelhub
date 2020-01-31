import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/app/App";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/js/bootstrap";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
