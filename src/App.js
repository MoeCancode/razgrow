import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection"

function App() {

const [page, setPage] = useState("tiktok");

function pageHandler(thePage) {
  setPage(thePage);
}

const renderPage = () => {
  switch(page){
    case("tiktok"):
      return <HeroSection/>;
    case('instagram'):
      return <HeroSection />;
    default:
      return <HeroSection />;
  }
}

  return (
    <div className="App h-auto">
      <Navbar 
      currentPage = {page}
      handlePageChange = {pageHandler}/>

      {renderPage}
    </div>
  );
}

export default App;
