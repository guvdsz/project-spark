import "./FormSection.css";
import Tag from "./Tag";
export default function FormSection(props) {
  function addTech(e) {
    e.preventDefault();
    const formElement = new FormData(e.currentTarget);
    const tech = formElement.get("technologyInput");
    if (!tech) return;
    props.setTechList((prevTechList) => {
      return [...prevTechList, tech];
    });
    e.currentTarget.reset()
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
        <form onSubmit={addTech} className="add-form" autoComplete="off">
            <input
                type="text"
                name="technologyInput"
                id="technologyInput"
                placeholder="Enter a technology (e.g, React)"
                className="technology-input"
            />
            <input type="submit" value="Add" className="add-btn" />
        </form>
        <div className="tags">{tags}</div>
        <button disabled={props.loadingClass} className={`submit-idea-btn ${props.loadingClass ? "loading" : ""}`} onClick={props.suggestProject}>
            {props.loadingClass ? <span className="loader"></span> : "Spark"}
        </button>
    </div>
);
}
