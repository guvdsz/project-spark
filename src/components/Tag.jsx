import "./Tag.css"
import {Code2} from "lucide-react"
export default function Tag({tech, id, removeTech}) {
    return (
        <span id={id}><Code2 size={15} color="#171717"/>{tech}<button onClick={() => removeTech(id)}><i className="fa-solid fa-x"></i></button></span>
    )
}