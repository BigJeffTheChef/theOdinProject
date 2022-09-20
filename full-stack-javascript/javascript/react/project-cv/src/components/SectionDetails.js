import React from 'react';
import { createRoot } from 'react-dom/client';
import uniqid from 'uniqid';

export default class SectionDetails extends React.Component {
  render() {
    const { onClick, details } = this.props.data;
    const {section} = this.props;
    const fields = [];
    for (const detail of details) {
      fields.push(
        <p key={uniqid()}>
          <span>{detail.key}: </span>
          <span>{detail.value}</span>
        </p>
      );
    }
    return (
      <div className="section-detail" id={"section-" + section}>
        {fields}
        <button type="button" className="edit-btn" id={"edit-btn-" + section} onClick={onClick}>Edit {section}</button>
      </div>
    );
  }
}
