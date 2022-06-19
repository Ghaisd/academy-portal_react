import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import AcademyTV from "./pages/AcademyTV";
import Contact from "./pages/Contact";
import Navbar from './Navbar'
import Footer from './Footer'
import {Route, Routes} from "react-router-dom"
import { useState } from "react";
import IndividualArticle from "./pages/IndividualArticle";

const App = (props) => {

 const[article, setArticle]  = useState('');
 const[id, setId]  = useState('0');
let getArticleId = (id) => {
  setId(id)
  console.log("FromParent");

}

  return(
    
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/Home" element={<Home getArticleId={getArticleId}/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Articles" element={<Articles/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/AcademyTV" element={<AcademyTV/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Articles/:id" element={<IndividualArticle/>} />
      </Routes>
    </div>
    <Footer />
    </>
    )
}

export default App;
