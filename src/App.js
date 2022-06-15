import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import AcademyTV from "./pages/AcademyTV";
import Contact from "./pages/Contact";
import {Route, Routes } from "react-router-dom"


const App = () => {
 
  return(
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Articles" element={<Articles/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/AcademyTV" element={<AcademyTV/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
    </>
    )
}

export default App;
