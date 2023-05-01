import React from 'react';
import FormTextInput from "./FormTextInput";

export default class SectionGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name ?? '',
            email: this.props.email ?? '',
            phoneNumber: this.props.phoneNumber ?? ''
        }
    }

    render() {
        const {name, email, phoneNumber} = this.state;
        return (
            <div className='form-section'>
                <FormTextInput name='Name' id='general-name'/>
                <FormTextInput name='Email' id='general-email'/>
                <FormTextInput name='Phone Number' id='general-phone-number'/>
            </div>
        );
    }
}