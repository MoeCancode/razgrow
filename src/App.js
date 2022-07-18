import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TikTok from "./Components/TikTok";
import Insta from "./Components/Insta";

function App() {

const [page, setPage] = useState("tiktok");

function pageHandler(thePage) {
  setPage(thePage);
}

const renderPage = () => {
  switch(page){
    case("tiktok"):
      return <TikTok/>;
    case('instagram'):
      return <Insta/>;
    default:
      return <TikTok/>;
  }
}

  return (
    <div className="App h-auto">
      <Navbar 
      currentPage = {page}
      handlePageChange = {pageHandler}/>

      {renderPage()}
    </div>
  );
}

export default App;
