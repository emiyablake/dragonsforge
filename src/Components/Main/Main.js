import React,{useState} from "react";
import './Main.css';
import GetClass from "../Classes/Classes";
import Monsters from "../Monsters/Monsters";


export default function Main () {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'classes':
                return <GetClass />;
            case 'monsters':
                return <Monsters />;
            default:
                return <div></div>
        }
    }

    return (
        <main>
            <h3>What do you wanna know about Dungeons and Dragons?</h3>
            <div className="navbar">
                <button onClick={() =>setSelectedComponent('classes')}>Class</button>
                <button onClick={() =>setSelectedComponent('monsters')}>Monsters</button>
            </div>
            <div className="content">
                {renderComponent()}
            </div>
            
        </main>
    )
}

