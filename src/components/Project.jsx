import ReactMarkdown from "react-markdown";
import "./Project.css";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
export default function Project(props) {
  return (
    <div className="project-section">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {props.project}
      </ReactMarkdown>
    </div>
  );
}
