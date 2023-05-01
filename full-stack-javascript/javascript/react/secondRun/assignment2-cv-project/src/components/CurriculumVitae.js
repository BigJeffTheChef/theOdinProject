import React from 'react';
import FormTextInput from "./FormTextInput";

export default class CurriculumVitae extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experienceRowCount: 1
        };
        this.handleAddRow = this.handleAddRow.bind(this);
    }

    handleAddRow() {
        let count = this.state.experienceRowCount + 1;
        this.setState({
            experienceRowCount: count
        });
    }

    render() {
        const experienceRows = [];
        for (let i = 0; i < this.state.experienceRowCount; i++) {
            experienceRows.push(
                <div className='form-section' id='experience' key={'experience-row-' + i}>
                    <FormTextInput name='Company Name' id={'experience-company-name' + i}/>
                    <FormTextInput name='Title' id={'experience-company-title' + i}/>
                    <FormTextInput name='Main Tasks' id={'experience-main-tasks' + i}/>
                    <FormTextInput name='Start Date' id={'experience-start-date' + i}/>
                    <FormTextInput name='End Date' id={'experience-date-of-study' + i}/>
                </div>
            );
        }
        return (
            <div>
                <div className='form-section' id='general'>
                    <FormTextInput name='Name' id='general-name'/>
                    <FormTextInput name='Email' id='general-email'/>
                    <FormTextInput name='Phone Number' id='general-phone-number'/>
                </div>
                <div className='form-section' id='education'>
                    <FormTextInput name='School Name' id='education-school-name'/>
                    <FormTextInput name='Title of Study' id='education-title-of-study'/>
                    <FormTextInput name='Date of Study' id='education-date-of-study'/>
                </div>
                {experienceRows}
                <div><input type='button' value='add row' onClick={this.handleAddRow}/></div>
            </div>
        );
    }
}