import React from 'react';
import uniqid from 'uniqid';

export default class SectionList extends React.Component {
  render() {
    const { onClick, details } = this.props.data;
    const { section } = this.props;
    const listItems = [];
    for (const detail of details) {
      const subSection = [];
      for (const listItem in detail) {
        subSection.push(
          <p key={uniqid()}>
            <span>{listItem}: </span>
            <span>{detail[listItem]}</span>
          </p>
        );
      }
      listItems.push(
        <div key={uniqid()}>
          {subSection}
          <br />
        </div>
      );
    }
    return (
      <div className="section-list" id={"section-" + section}>
        {listItems}
        <button type="button" className="edit-btn" id={"edit-btn-" + section} onClick={onClick}>Edit {section}</button>
      </div>
    );
  }
}
