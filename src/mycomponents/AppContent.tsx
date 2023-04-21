import { Component, ReactNode } from "react";
import './AppContent.css';
import Contact from "./Contact";
import ContactList from "./ContactList";
import contactsData from "./ContactsData";

const contacts:Contact[]=contactsData


class AppContent extends Component{

    

    btnHandler=()=>{
        console.log('Button 1 clicked');
    }

    render(): ReactNode {
        return (
            <div className="app-content">           
                <h1 className="alert alert-info">Using ContactCard Form</h1>
               <ContactList contacts={contacts} />
            </div>
        )
    }
}
export default AppContent;