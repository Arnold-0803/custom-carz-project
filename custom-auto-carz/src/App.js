import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Service from "./pages/ServicesPage";
import AboutUs from "./pages/AboutPage";
import Contact from "./pages/ContacPage";
import ScrollToTop from "./components/assets/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>     
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
