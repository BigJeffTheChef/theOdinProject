import React from 'react';
import uniqid from 'uniqid';

/**
 * Creates a modal containing a variable number of input elements, each of which can be of any valid input type.
 *
 */
export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  onClickOutside(e) {
    if (e.target.closest('.inner-modal') === null) {
      //document.querySelector('#app-container').removeChild(document.querySelector('.container-modal'));
      document.getElementById(this.getModalId()).classList.add('hidden');
    }
  }

  getModalId() {
    return 'modal-' + this.props.section;
  }

  getFieldId(id) {
    return id + '-field';
  }

  render() {
    const fields = this.props.fields.map(e => {
      return (
        <div key={uniqid()}>
          <input type={e.type} className={this.getFieldId(e.id)} defaultValue={e.val}></input>
        </div>
      );
    });
    // const fields = [];
    // for (const field of this.props.fields) {
    //   //console.log(field);
    //   fields.push(<input type={field.type} className={field.id + '-field'}></input>);
    // }
    return (
      <div id={this.getModalId()} className="container-modal hidden" onClick={this.onClickOutside}>
        <div className="inner-modal">
          <form>
            {fields}
            <button type="button" onClick={ this.props.onClickUpdateButton}>Update details</button>
          </form>
        </div>
      </div>
    );
  }
}