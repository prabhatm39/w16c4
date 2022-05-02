
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import {About } from "./components/About";
import { Products } from "./components/Products";

import { MainRoutes } from "./Routes/MainRoutes";


function App() {
  return (
    <div className="App">
     <MainRoutes />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path= "/products/*" element={<Products />} />
       
       
       </Routes>
    </div>
  );
}

export default App;
