import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import AcademyTV from "./pages/AcademyTV";
import Contact from "./pages/Contact";
import IndividualArticle from "./pages/IndividualArticle";
import IndividualPersonalizedPage from "./pages/IndividualPersonalizedPage";
import Footer from "./Components/Footer";
import Login from "./pages/Login";

const App = (props) => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/About" element={<About />} />
          <Route path="/AcademyTV" element={<AcademyTV />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Articles/:id" element={<IndividualArticle />} />
          <Route path="/about/:id" element={<IndividualPersonalizedPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
