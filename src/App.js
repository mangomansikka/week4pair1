import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./app.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* Added other routes if you want*/}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<About />} />
          <Route path="*" element={<NotFound />} /> {/* Added this line for 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
