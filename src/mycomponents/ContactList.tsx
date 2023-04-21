import Contact from "./Contact"
import ContactCard from "./ContactCard";


interface ContactProps {
    contacts: Contact[];
}

const ContactList = ({ contacts }: ContactProps) => {  

    let cardItems=contacts.map(c=><ContactCard contact={c} />);

    return (
        <>
            {cardItems}
        </>
    )
}

export default ContactList;