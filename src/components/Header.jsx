import "./Header.css"
import { Zap } from "lucide-react";
import { RiGeminiFill } from "react-icons/ri";
export default function Header() {
    return (
        <header>
            <div className="header-title-logo">
            <Zap color="#171717" size={50}/>
            <h1>Project Spark</h1>
            </div>
            <p className="header-description">Ignite your creativity with personalized project ideas</p>
            <p className="powered">Powered by Gemini <RiGeminiFill className="gemini"/></p>
        </header>
    )
} 