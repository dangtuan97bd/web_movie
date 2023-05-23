import "./App.scss";
// import "boxicons";
import "boxicons/css/boxicons.min.css";
import "swiper";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/header/Header.jsx";
import Footer from "./component/footer/Footer.jsx";

import Router from "./config/Router";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
