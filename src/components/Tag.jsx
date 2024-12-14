import "./Tag.css"
export default function Tag({tech, id, removeTech}) {
    return (
        <span id={id}>{tech}<button onClick={() => removeTech(id)}><i className="fa-solid fa-x"></i></button></span>
    )
}