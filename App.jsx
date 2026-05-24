// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./src/components/Nav";
import Footer from "./src/components/Footer";
import Home from "./src/pages/Home";
import ProjectsPage from "./src/pages/ProjectsPage";
import ExperiencePage from "./src/pages/ExperiencePage";
import ToolsPage from "./src/pages/ToolsPage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
