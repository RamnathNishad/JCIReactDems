import Contact from "./Contact";

interface ContactProps {
    contact: Contact;
}

const ContactCard = ({ contact }: ContactProps) => {
    return (
        <div>
            <div className="" style={{ width: '40px', padding: '10px', margin: '10px' }}>
                <div className="row">
                    <div className="col-md-4">
                        <img src={contact.picture}
                            width='100px'
                            height='100px'
                            className=""
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="">
                            <h5 className="">{contact.name}</h5>
                            <div className="">{contact.email}</div>
                            <div className="">{contact.phone}</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default ContactCard;