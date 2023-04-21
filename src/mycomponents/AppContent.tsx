import { Component, ReactNode } from "react";
import './AppContent.css';

class AppContent extends Component{

    

    btnHandler=()=>{
        console.log('Button 1 clicked');
    }

    render(): ReactNode {
        return (
            <div className="app-content">           

                <h3>This is the content area of our application</h3>
                <button className="btn btn-primary" onClick={this.btnHandler}>Button 1</button>
            </div>
        )
    }
}
export default AppContent;