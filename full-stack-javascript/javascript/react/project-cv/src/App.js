import React from 'react';

// React Components
import Info from './components/Info';
import Education from './components/Education';
import Work from './components/Work';

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
  }

  onClickEditInfo() {

  }

  render() {
    const { info, work, education } = this.state;
    return (
      <div id="app-container">
        <Info details={info.details} onClick={ this.onClickEditInfo }/>
        <Education />
        <Work />
      </div>
    );
  }
}