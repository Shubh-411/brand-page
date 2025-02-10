import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router"; 
import Brand from "./components/Brand";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Brand />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
