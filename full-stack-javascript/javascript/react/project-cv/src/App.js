import React from 'react';

// React Components
import SectionDetails from './components/SectionDetails';
import SectionList from './components/SectionList';
import Modal from './components/Modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // TODO finalise state structure so its usable across all Section components
    this.state = {
      info: {
        details: [
          {
            key: 'name',
            value: 'Peter M',
            inputType: 'text',
          },
          {
            key: 'address',
            value: '10 nottellya ave',
            inputType: 'text',
          },
          {
            key: 'email',
            value: 'anemail@provider.tld',
            inputType: 'email',
          },
        ],
        edit: false,
      },
      work: {
        details: [
          {
            business:'Centra Finaghy',
            title: 'Cashier',
            time: '3 months',
          },
          {
            business:'Lavery\'s',
            title: 'Barstaff',
            time: '6 Months',
          },
        ],
        edit: false,
      },
      education: {
        details: [
          {
            school: 'Rathmore Grammar',
            level: 'secondary',
          },
          {
            school: 'QUB',
            level: 'BSc Genetics',
          },
          {
            school: 'QUB',
            level: 'MSc Software Development',
          },
        ],
        edit: false,
      },
    };
    this.onClickEditInfo = this.onClickEditInfo.bind(this);
    this.onClickUpdateButtonInfo = this.onClickUpdateButtonInfo.bind(this);
    this.onClickUpdateButtonWork = this.onClickUpdateButtonWork.bind(this);
  }

  onClickEditInfo() {
    const { edit } = this.state.education;
    this.setState({
      education: {
        edit: !edit,
      }
    });
    document.querySelector('#modal-info').classList.remove('hidden');
    //}, () => {setTimeout(() => {console.log(this.state.education.edit);}, 1)});

  }

  onClickUpdateButtonInfo() {
    this.setState({
      info: {
        details: {
          name: document.querySelector('.name-field').value,
          address: document.querySelector('.address-field').value,
          email: document.querySelector('.email-field').value,
        }
      }
    });
  }

  onClickEditWork() {
    const { edit } = this.state.work;
    this.setState({
      work: {
        edit: !edit,
      }
    });
    document.querySelector('#modal-work').classList.remove('hidden');
  }

  onClickUpdateButtonWork() {
    this.setState({
      info: {
        details: {
          name: document.querySelector('.name-field').value,
          address: document.querySelector('.address-field').value,
          email: document.querySelector('.email-field').value,
        }
      }
    });
  }

  render() {
    const { info, work, education } = this.state;
    return (
      <div id="app-container">
        <SectionDetails data={info} section="info" onClick={this.onClickEditInfo} />
        <SectionList data={work} section="work" onClick={this.onClickEditWork} />

        {/* <Modal section="info" onClickUpdateButton={this.onClickUpdateButtonInfo} fields={[
          { id: "name", type: "text", val: info.details.name },
          { id: "address", type: "text", val: info.details.address },
          { id: "email", type: "email", val: info.details.email }
        ]} /> */}
      </div>
    );
  }
}