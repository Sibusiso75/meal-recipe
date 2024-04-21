import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCocktail from "./components/SingleCocktail";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import EmailVerification from "./components/EmailVerification/EmailVerification";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/resetPassword/:token" element={<ResetPassword/>}></Route>
      <Route path="/users/:id/verify/:token" element={<EmailVerification/>}></Route>
      <Route path="/meal/:id" element={<SingleCocktail />}></Route>
        <Route path="*" element={<h6>404 - Not page found</h6>}></Route>
      </Routes>
    </Router>
  );
}

export default App;