import "./Header.css"
import sparkIcon from "../assets/spark-icon.svg"
export default function Header() {
    return (
        <header>
            <div className="header-title-logo">
            <img src={sparkIcon} alt="Spark Icon"/>
            <h1>ProjectSpark</h1>
            </div>
            <p className="header-description">Ignite your creativity with personalized project ideas</p>
        </header>
    )
} 