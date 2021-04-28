import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "./bootstrap.min.css";
import HotelContextProvider from "./contexts/HotelContext";
import UserContextProvider from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <HotelContextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </HotelContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
