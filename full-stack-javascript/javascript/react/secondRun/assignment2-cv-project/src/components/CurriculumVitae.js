import React from 'react';
import FormTextInput from "./FormTextInput";

export default class CurriculumVitae extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='form-section'>
                    <FormTextInput name='Name' id='general-name'/>
                    <FormTextInput name='Email' id='general-email'/>
                    <FormTextInput name='Phone Number' id='general-phone-number'/>
                </div>
                <div className='form-section'>
                    <FormTextInput name='School Name' id='general-school-name'/>
                    <FormTextInput name='Title of Study' id='general-title-of-study'/>
                    <FormTextInput name='Date of Study' id='general-date-of-study'/>
                </div>
                <div className='form-section'>
                    <FormTextInput name='School Name' id='general-school-name'/>
                    <FormTextInput name='Title of Study' id='general-title-of-study'/>
                    <FormTextInput name='Date of Study' id='general-date-of-study'/>
                </div>
            </div>
        );
    }
}