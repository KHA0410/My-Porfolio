import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import educationSlice from "./redux/educationSlice";
import technicalSlice from "./redux/technicalSlice";
import projectSlice from "./redux/projectSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
let store = configureStore({
  reducer:{
    educationSlice,
    technicalSlice,
    projectSlice,
  }
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
