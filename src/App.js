import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === '') {
      
    }
  }
  
 return(
  <>
  <Header />
  <About />
  </>
 )
}

export default App;
