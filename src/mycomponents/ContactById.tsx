import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import contactsData from "../mycomponents/ContactsData";

const contacts = contactsData;

const ContactById = () => {

    const params = useParams();
    const id: number = Number(params.id);

    let [contact, setData] = useState({ id: 0, name: "", email: "", phone: "", picture: "" });

    //this is called only once when the component is loaded
    useEffect(() => {
        fetch("http://localhost:4000/contacts/" + id)
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    setData(data);
                });
            });
    }, []);

    return (
        <div>
            <p>
                <img src={"../" + contact.picture} width="100px" height="100px" />
            </p>
            <p>Id:{contact.id}</p>
            <p>Name:{contact.name}</p>
            <p>Email id:{contact.email}</p>
            <p>Phone Number:{contact.phone}</p>
            <p>
                <Link to="/view-all-contacts">Back to List</Link>
            </p>
        </div>
    )
}

export default ContactById;