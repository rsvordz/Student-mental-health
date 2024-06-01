import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SelfHelp from "./pages/SelfHelp";
import Layout from "./components/Layouts";
import About from "./pages/About";

import Help from "./components/help";
import Resources from "./components/Resources";
import AboutK from "./components/AboutK";
import Confidentiality from "./components/Confidentiality";
import Mos from "./components/Mos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="self-help"
            element={
              <SelfHelp>
                <Help />
              </SelfHelp>
            }
          />
          <Route
            path="self-help/resources"
            element={
              <SelfHelp>
                <Resources />
              </SelfHelp>
            }
          />

          <Route
            path="/about"
            element={
              <About>
                <AboutK />
              </About>
            }
          />
          <Route
            path="/about/confidentiality"
            element={
              <About>
                <Confidentiality />
              </About>
            }
          />
          <Route
            path="/about/contact"
            element={
              <About>
                <Contact />
              </About>
            }
          />
          <Route
            path="/about/staff"
            element={
              <About>
                <Mos />
              </About>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
