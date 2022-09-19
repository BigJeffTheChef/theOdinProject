import React from 'react';

// React Components
import Info from './components/Info';
import Education from './components/Education';
import Work from './components/Work';
import Modal from './components/Modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        details: {
          name: "Peter M",
          address: "10 nottellya ave",
          email: "anemail@provider.tld"
        },
        edit: false,
      },
      work: {
        details: [
          {
            business: "centra",
            title: "Cashier",
            time: "3 months",
          },
          {
            business: "laveries",
            title: "bar staff",
            time: "4 months",
          },
          {
            business: "biochemistry",
            title: "lab tech",
            time: "5 years",
          },
        ],
        edit: false,
      },
      education: {
        details: [
          {
            school: "Rathmore Grammar",
            level: "secondary",
          },
          {
            school: "QUB",
            level: "BSc Genetics",
          },
          {
            school: "QUB",
            level: "MSc Software Development",
          },
        ],
        edit: false,
      },
    };
    this.onClickEditInfo = this.onClickEditInfo.bind(this);
    this.onClickUpdateButtonInfo = this.onClickUpdateButtonInfo.bind(this);
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
          address:document.querySelector('.address-field').value,
          email:document.querySelector('.email-field').value,
        }
      }
    });
  }

  render() {
    const { info, work, education } = this.state;
    return (
      <div id="app-container">
        <Info details={info.details} onClick={this.onClickEditInfo} />
        <Education />
        <Work />
        <Modal section="info" onClickUpdateButton={this.onClickUpdateButtonInfo} fields={[
          { id: "name", type: "text", val: info.details.name },
          { id: "address", type: "text", val: info.details.address },
          { id: "email", type: "email", val: info.details.email }
        ]} />
      </div>
    );
  }
}