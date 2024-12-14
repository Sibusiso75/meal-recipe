import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCocktail from "./pages/SingleCocktail";
const Home = lazy(()=>import("./pages/Home"));
import Loading from "./components/Home/Loading";

function App() {
  return (
    <Router>
        <Suspense fallback={<Loading/>}>
      <Routes>
      <Route path="/" element={<Home />}></Route>
 <Route path="/meal/:id" element={<SingleCocktail />}></Route>
        <Route path="*" element={<h6>404 - Not page found</h6>}></Route>
      </Routes>
        </Suspense>
    </Router>
  );
}

export default App;