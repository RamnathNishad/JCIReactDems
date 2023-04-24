import { Link, useParams } from "react-router-dom";
import contactsData from "../mycomponents/ContactsData";

const contacts = contactsData;

const ContactById = () => {

    const params = useParams();
    const id: number = Number(params.id);

    const contactById = contacts.filter(c => c.id == id).map(c => {
        return (
            <div>
                <p>
                    <img src={"../" + c.picture} width="100px" height="100px" />
                </p>
                <p>Id:{c.id}</p>
                <p>Name:{c.name}</p>
                <p>Email id:{c.email}</p>
                <p>Phone Number:{c.phone}</p>
                <p>
                    <Link to="/view-all-contacts">Back to List</Link>
                </p>
            </div>)
    });

    return (
        <p>{contactById}</p>
    )

}

export default ContactById;