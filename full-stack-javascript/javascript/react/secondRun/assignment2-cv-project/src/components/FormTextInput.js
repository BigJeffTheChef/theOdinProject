import React from "react";

/**
 * Requires a name: string prop which is applied as text to the input's label
 */
export default class FormTextInput extends React.Component {
    #BUTTON_EDIT = 'Edit';
    #BUTTON_SAVE = 'Save';

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            editMode: false,
            buttonPrompt: this.#BUTTON_EDIT
        };
        this.id = this.props.id;
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        this.setState({
            editMode: !this.state.editMode,
            buttonPrompt: this.state.editMode ? this.#BUTTON_EDIT : this.#BUTTON_SAVE
        })
        if (this.state.editMode) {
            this.setState({
                inputValue: document.querySelector('#' + this.id + '>input[type="text"]').value
            })
        }
    }

    render() {
        const pClass = this.state.editMode ? 'hidden' : this.state.inputValue === '' ? 'hidden' : '';
        const inputClass = !this.state.editMode ? 'hidden' : '';
        const inputId = this.id + '-input';
        return (
            <div id={this.id} className='FormTextInput'>
                <label htmlFor={inputId}>{this.props.name}</label>
                <p className={pClass}>{this.state.inputValue}</p>
                <input id={inputId} type='text' className={inputClass} defaultValue={this.state.inputValue}/>
                <input type='button' value={this.state.buttonPrompt} onClick={this.onClickButton}/>
            </div>
        );
    }
}