import { Link } from "react-router-dom";
import Contact from "./Contact"
import ContactCard from "./ContactCard";


interface ContactProps {
    contacts: Contact[];
}

const ContactList = ({ contacts }: ContactProps) => {  

    let cardItems=contacts.map(c=><ContactCard contact={c} />);

    return (
        <>
            <Link to="/">Back to Home</Link>
            {cardItems}
        </>
    )
}

export default ContactList;