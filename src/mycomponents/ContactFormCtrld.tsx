import { Component, ReactNode } from "react";

interface StateFields {
    name: string;
    email: string;
    phone: string;
    picture: string;
    formErrors: {
        name: string,
        email: string,
        phone: string,
        picture: string
    },
    errorMessages: string
}

class ContactForm extends Component<{}, StateFields> {


    validateForm = (formErrors: {
        name: string,
        email: string,
        phone: string,
        picture: string
    }): boolean => {

        let valid = true;
   
        let errorMessages = '';
        errorMessages += '<li>' + formErrors.name + '</li>';
        errorMessages += '<li>' + formErrors.email + '</li>';
        errorMessages += '<li>' + formErrors.phone + '</li>';
        errorMessages += '<li>' + formErrors.picture + '</li>';

        this.setState({ ...this.state, 'errorMessages': errorMessages });

        if (formErrors.name.length === 0 && formErrors.email.length === 0 && formErrors.phone.length === 0 && formErrors.picture.length === 0) {
            valid = true;
        } else {
            valid = false;

        }
        return valid;
    }

    addNewContact = (event: any) => {
        event.preventDefault();

        //extract the formErrors from the state
        let { formErrors } = this.state;
        if (this.validateForm(formErrors)) {
            alert('All is well');
        }   
    }

    tfHandler = (event: { target: { name: string | number; value: string; }; }) => {
 
        let name = event.target.name;
        let value = event.target.value;

        let { formErrors } = this.state;

        switch (name) {
            case 'name':
                if (!value || value.length === 0) {
                    formErrors.name = 'Name is required';
                }
                else if (value.length < 3 || value.length > 20) {
                    formErrors.name = 'Name must be between 3 to 20 letters';
                }
                else {
                    formErrors.name = '';
                }
                break;


            case 'email':
                if (!value || value.length === 0) {
                    formErrors.name = 'Email id is required';
                }
                else {
                    formErrors.email = '';
                }
                break;

            case 'phone':
                if (!value || value.length === 0) {
                    formErrors.phone = 'Phone is required';
                }
                else if (value.length < 10) {
                    formErrors.phone = 'Phone number must be 10-digit';
                }
                else {
                    formErrors.phone = '';
                }
                break;
            case 'picture':
                if (!value || value.length === 0) {
                    formErrors.picture = 'Picture is required';
                }
                else {
                    formErrors.picture = '';
                }
                break;
        }



        this.setState({ ...this.setState, [name]: value, formErrors: formErrors });
        //console.log(this.state.formErrors);
    }


    state = {
        name: '',
        email: '',
        phone: '',
        picture: '',

        formErrors: {
            name: 'Name is required',
            email: 'Email is required',
            phone: 'Phone is required',
            picture: ''
        },
        errorMessages: ''
    }
    render(): ReactNode {
        return (
            <div>
                {/* <p>{this.state.errorMessages}</p> */}
                <h3>Add a new contact</h3>
                <form className="form" onSubmit={this.addNewContact}>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Name</label>
                        </div>
                        <div className="col-md-8">
                            <input name="name" value={this.state.name} onChange={this.tfHandler} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Email address</label>
                        </div>
                        <div className="col-md-8">
                            <input name="email" value={this.state.email} onChange={this.tfHandler} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Phone number</label>
                        </div>
                        <div className="col-md-8">
                            <input name="phone" value={this.state.phone} onChange={this.tfHandler} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Picture</label>
                        </div>
                        <div className="col-md-8">
                            <input name="picture" value={this.state.picture} onChange={this.tfHandler} type="text" className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary">Save data</button>


                </form>
                <ul>
                    {this.state.errorMessages}
                </ul>
            </div>
        )
    }
}

export default ContactForm;