import { Component, ReactNode } from "react";
import './AppContent.css';
import Contact from "./Contact";
import ContactList from "./ContactList";
import contactsData from "./ContactsData";

const contacts:Contact[]=contactsData



class AppContent extends Component{


    state={"counter":0};

    btnHandler=()=>{
        console.log('Button 1 clicked');
    }
    
    increment = ()=>{
        console.log("counter updated");
        this.setState({"counter":this.state.counter + 1});
    }

    render(): ReactNode {
        return (
            <div className="app-content">           
                {/* <h1 onClick={this.increment} className="alert alert-info">Using ContactCard Form : {this.state.counter}</h1> */}
                <h1 className="alert alert-info">Using ContactCard Form : </h1>
               <ContactList contacts={contacts} />
            </div>
        )
    }
}
export default AppContent;