import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/styles";

import { store, persistor } from "./redux/ConfigureStore";
import "./index.css";
import theme from "./theme";

import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router hashType={"slash"} basename={`${process.env.PUBLIC_URL}`}>
          <App />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
