import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ResumePage from "./components/ResumePage";
import ResumeAdmin from "./components/ResumeAdmin";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<ResumePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route
            path="/resume/minimal"
            element={<ResumePage template="minimal" />}
          />
          <Route
            path="/resume/modern"
            element={<ResumePage template="modern" />}
          />
          <Route
            path="/resume/creative"
            element={<ResumePage template="creative" />}
          />
          <Route
            path="/resume/developer"
            element={<ResumePage template="developer" />}
          />
          <Route
            path="/resume/developer/minimal"
            element={<ResumePage template="developer" style="minimal" />}
          />
          <Route
            path="/resume/developer/modern"
            element={<ResumePage template="developer" style="modern" />}
          />
          <Route
            path="/resume/developer/creative"
            element={<ResumePage template="developer" style="creative" />}
          />
          <Route
            path="/resume/marketing"
            element={<ResumePage template="marketing" />}
          />
          <Route
            path="/resume/marketing/minimal"
            element={<ResumePage template="marketing" style="minimal" />}
          />
          <Route
            path="/resume/marketing/modern"
            element={<ResumePage template="marketing" style="modern" />}
          />
          <Route
            path="/resume/marketing/creative"
            element={<ResumePage template="marketing" style="creative" />}
          />
          <Route
            path="/resume/finance"
            element={<ResumePage template="finance" />}
          />
          <Route
            path="/resume/finance/minimal"
            element={<ResumePage template="finance" style="minimal" />}
          />
          <Route
            path="/resume/finance/modern"
            element={<ResumePage template="finance" style="modern" />}
          />
          <Route
            path="/resume/finance/creative"
            element={<ResumePage template="finance" style="creative" />}
          />
          <Route
            path="/resume/healthcare"
            element={<ResumePage template="healthcare" />}
          />
          <Route
            path="/resume/healthcare/minimal"
            element={<ResumePage template="healthcare" style="minimal" />}
          />
          <Route
            path="/resume/healthcare/modern"
            element={<ResumePage template="healthcare" style="modern" />}
          />
          <Route
            path="/resume/healthcare/creative"
            element={<ResumePage template="healthcare" style="creative" />}
          />
          <Route
            path="/resume/education"
            element={<ResumePage template="education" />}
          />
          <Route
            path="/resume/education/minimal"
            element={<ResumePage template="education" style="minimal" />}
          />
          <Route
            path="/resume/education/modern"
            element={<ResumePage template="education" style="modern" />}
          />
          <Route
            path="/resume/education/creative"
            element={<ResumePage template="education" style="creative" />}
          />
          <Route
            path="/resume/creative-design"
            element={<ResumePage template="creative-design" />}
          />
          <Route
            path="/resume/creative-design/minimal"
            element={<ResumePage template="creative-design" style="minimal" />}
          />
          <Route
            path="/resume/creative-design/modern"
            element={<ResumePage template="creative-design" style="modern" />}
          />
          <Route
            path="/resume/creative-design/creative"
            element={<ResumePage template="creative-design" style="creative" />}
          />
          <Route
            path="/resume/hospitality"
            element={<ResumePage template="hospitality" />}
          />
          <Route
            path="/resume/hospitality/minimal"
            element={<ResumePage template="hospitality" style="minimal" />}
          />
          <Route
            path="/resume/hospitality/modern"
            element={<ResumePage template="hospitality" style="modern" />}
          />
          <Route
            path="/resume/hospitality/creative"
            element={<ResumePage template="hospitality" style="creative" />}
          />
          <Route path="/admin" element={<ResumeAdmin />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
