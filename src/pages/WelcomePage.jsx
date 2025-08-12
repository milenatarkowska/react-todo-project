import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";
import { Button } from 'primereact/button';


export default function WelcomePage(){
    const navigate = useNavigate();
    return (
        <div className="welcome-page" >
            <div className="message">
                <h1>Take action.</h1>
            </div>
            <div className="button">
                <Button label="Start using the app" icon="pi pi-arrow-right" iconPos="right" onClick={() => navigate("/app")}/>
            </div>
        </div>
    )
}