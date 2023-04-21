import { Component, ReactNode, createRef } from "react";


class ContactForm extends Component {
    nameRef=createRef<HTMLInputElement>();
    emailRef=createRef<HTMLInputElement>();
    phoneRef=createRef<HTMLInputElement>();
    pictureRef=createRef<HTMLInputElement>();
    

addNewContact=(evt:any)=>{
    evt.preventDefault(); //to prevent the default behavior of form submission 

    const name=this.nameRef.current?.value;
    const email=this.emailRef.current?.value;
    const phone=this.phoneRef.current?.value;
    const picture=this.pictureRef.current?.value;


    console.log('adding new contact....');
    console.log(name, email, phone, picture);
}

    render(): ReactNode {
        return (
            <div>
                <h3>Add a new contact</h3>
                <form className="form" onSubmit={this.addNewContact}>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Name</label>
                        </div>
                        <div className="col-md-8">
                            <input ref={this.nameRef} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Email address</label>
                        </div>
                        <div className="col-md-8">
                            <input ref={this.emailRef} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Phone number</label>
                        </div>
                        <div className="col-md-8">
                            <input ref={this.phoneRef} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Picture</label>
                        </div>
                        <div className="col-md-8">
                            <input ref={this.pictureRef} type="text" className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary">Save data</button>


                </form>
            </div>
        )
    }
}
export default ContactForm;