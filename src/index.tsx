import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import { applyMiddleware, compose, createStore } from "redux";
// import { RootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import {store} from "./rtk/index"
// import thunk from "redux-thunk";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<React.StrictMode>{app}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
