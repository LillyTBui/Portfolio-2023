import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import ProjectHolidaze from "./components/Projects/ProjectHolidaze";
import ProjectDuckSurfer from "./components/Projects/ProjectDuckSurfer";
import ProjectHappyTourist from "./components/Projects/ProjectHappyTourist";
import ProjectMuseum from "./components/Projects/ProjectMuseum";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollManager from "./ScrollManager";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/holidaze" element={<ProjectHolidaze />} />
          <Route path="/projects/duckSurfer" element={<ProjectDuckSurfer />} />
          <Route
            path="/projects/happyTourist"
            element={<ProjectHappyTourist />}
          />
          <Route
            path="/projects/communityScienceMuseum"
            element={<ProjectMuseum />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
