import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

export default function WelcomePage(){
    const navigate = useNavigate();
    return (
        <div className="welcome-page" >
            <div className="message">
                <h1>Take action.</h1>
            </div>
            <div className="button">
                <button onClick={() => navigate("/app")}>Start using the app</button>
            </div>
        </div>
    )
}