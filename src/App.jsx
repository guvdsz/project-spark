import { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import { getProject } from "./IA.js";
import Project from "./components/Project.jsx";

function App() {
  const [techList, setTechList] = useState(["JavaScript"]);
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(false);
  const projectWrapper = useRef(null);

  useEffect(() => {
    if (project && projectWrapper.current) {
      projectWrapper.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [project]);

  async function suggestProject() {
    setLoading(true);
    const response = await getProject(techList);
    setProject(response);
    setLoading(false);
  }

  return (
    <>
      <main>
        <Header />
        <FormSection
          setTechList={setTechList}
          techList={techList}
          suggestProject={suggestProject}
          loadingClass={loading}
        />
        {project && (
          <div className="project-wrapper" ref={projectWrapper}>
            <Project project={project} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
