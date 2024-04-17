import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import {AppProvider } from "./context";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider><App/><ToastContainer
  position="bottom-left"
  autoClose={5000}
  hideProgressBar={true}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  /></AppProvider>)