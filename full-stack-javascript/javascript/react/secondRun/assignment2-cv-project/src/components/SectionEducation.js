import React from 'react';
import FormTextInput from "./FormTextInput";

export default class SectionEducation extends React.Component {
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
                <FormTextInput name='School Name' id='general-school-name'/>
                <FormTextInput name='Title of Study' id='general-title-of-study'/>
                <FormTextInput name='Date of Study' id='general-date-of-study'/>
            </div>
        );
    }
}