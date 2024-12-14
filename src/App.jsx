import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FormSection from './components/FormSection'
import { getProject } from "./IA.js"
import Project from './components/Project.jsx'
function App() {
const [techList, setTechList] = useState(["JavaScript"])
const [project, setProject] = useState("")
const [loading, setLoading] = useState(false)
async function suggestProject() {
  setLoading((prevLoading) => {
    return !prevLoading
  })
  const response = await getProject(techList)
  setProject(response)
  setLoading((prevLoading) => {
    return !prevLoading
  })
}
  return (
    <>
      <main>
        <Header/>
        <FormSection setTechList={setTechList} techList={techList} suggestProject={suggestProject} loadingClass={loading}/>
        {project && <Project project={project}/>}
      </main>
    </>
  )
}

export default App
