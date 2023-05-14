// App.js is the top level of our application
import { useState } from "react";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Resume from "./components/pages/Resume"
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
// import DarkModeToggle  from "./components/DarkModeToggle";


const App = () => {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

const handlePageChange = (page) => setCurrentPage(page);
  
 return(
  <>
  <Header /> 
  <div>
  {/* <DarkModeToggle /> */}
  <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
  </div>
  {renderPage()}
  <Footer />
  </>
 )
}

export default App;
