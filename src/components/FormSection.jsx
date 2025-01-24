import "./FormSection.css";
import Tag from "./Tag";
import { Sparkles,Plus } from "lucide-react";
export default function FormSection(props) {
  function addTech(e) {
    e.preventDefault();
    const formElement = new FormData(e.currentTarget);
    const tech = formElement.get("technologyInput");
    if (!tech) return;
    props.setTechList((prevTechList) => {
      return [...prevTechList, tech];
    });
    e.currentTarget.reset();
  }
  function removeTech(id) {
    props.setTechList((prevTechList) => {
      return prevTechList.filter((item, index) => index !== id);
    });
  }
  const tags = props.techList.map((item, index) => {
    return <Tag tech={item} id={index} key={index} removeTech={removeTech} />;
  });
  return (
    <div className="form-section">
      <h2> <Sparkles color="#171717" size={20}/> Generate Project Ideas</h2>
      <form onSubmit={addTech} className="add-form" autoComplete="off">
        <input
          type="text"
          name="technologyInput"
          id="technologyInput"
          placeholder="Enter a technology (e.g, React)"
          className="technology-input"
        />
        <button type="submit" className="add-btn"><Plus/></button>
      </form>
      <div className="tags">{tags}</div>
      <button
        disabled={props.loadingClass}
        className={`submit-idea-btn ${props.loadingClass ? "loading" : ""}`}
        onClick={props.suggestProject}
      >
        {props.loadingClass ? <span className="loader"></span> : <><Sparkles color="#fff" size={15}/> Spark</>}
      </button>
    </div>
  );
}
