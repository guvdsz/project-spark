import ReactMarkdown from "react-markdown"
import "./Project.css"
export default function Project(props) {
    return (
        <div className="project-section">
              <ReactMarkdown>{props.project}</ReactMarkdown>
        </div>
    )
}