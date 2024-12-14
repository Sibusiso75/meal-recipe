import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Loading from "./components/Home/Loading";
const SingleCocktail = lazy(()=>import("./components/SingleCocktail"));
const Home = lazy(()=>import("./pages/Home"));
const Login = lazy(()=>import("./components/LoginAndReg/Login"));
const SignUp = lazy(()=>import("./components/LoginAndReg/SignUp"));
const ForgotPassword = lazy(()=>import("./components/ForgotAndReset/ForgotPassword"));
const ResetPassword = lazy(()=>import("./components/ForgotAndReset/ResetPassword"));
// import EmailVerification from "./components/EmailVerification/EmailVerification";
=======
import Loading from "./Home/Loading";
const SingleCocktail = lazy(()=>import("./pages/SingleCocktail"));
const Home = lazy(()=>import("./pages/Home"));

>>>>>>> 4e57375 (first c)
function App() {
  return (
    <Router>
        <Suspense fallback={<Loading/>}>
      <Routes>
<<<<<<< HEAD

      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/resetPassword/:token" element={<ResetPassword/>}></Route>
      {/* <Route path="/users/:id/verify/:token" element={<EmailVerification/>}></Route> */}
=======
      <Route path="/" element={<Home />}></Route>
>>>>>>> 4e57375 (first c)
      <Route path="/meal/:id" element={<SingleCocktail />}></Route>
        <Route path="*" element={<h6>404 - Not page found</h6>}></Route>
      </Routes>
        </Suspense>
    </Router>
  );
}

export default App;