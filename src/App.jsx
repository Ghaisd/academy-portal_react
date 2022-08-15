import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import AcademyTV from './pages/AcademyTV';
import Contact from './pages/Contact';
import IndividualArticle from './pages/IndividualArticle';
import IndividualPersonalizedPage from './pages/IndividualPersonalizedPage';
import Footer from './Components/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import ErrorPage from './pages/ErrorPage';

export const routes = {
  Home: '/Home',
  Articles: '/Articles',
  About: '/About',
  AcademyTV: '/AcademyTV',
  Contact: '/Contact',
  IndividualArticle: '/Articles/:id',
  IndividualPersonalizedPage: '/about/:id',
};

const App = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path={routes.Articles} element={<Articles />} />
        <Route path={routes.About} element={<About />} />
        <Route path={routes.AcademyTV} element={<AcademyTV />} />
        <Route path={routes.Contact} element={<Contact />} />
        <Route path={routes.IndividualArticle} element={<IndividualArticle />} />
        <Route path={routes.IndividualPersonalizedPage} element={<IndividualPersonalizedPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
