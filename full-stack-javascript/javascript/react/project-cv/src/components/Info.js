import React from 'react';
import { createRoot } from 'react-dom/client';

export default class Info extends React.Component {
  render() {
    const { name, address, email, edit } = this.props.details;
    const { onClick } = this.props;
    return (
      <div id="section-info">
        <p>
          <span>Name:</span>
          <span>{name}</span>
        </p>
        <p>
          <span>Address:</span>
          <span>{address}</span>
        </p>
        <p>
          <span>Email:</span>
          <span>{email}</span>
        </p>
        <button type="button" id="edit-btn-info" onClick={onClick}>Edit</button>
        <div className={"modal-info" + (edit ? "" : " hidden")}>
          <p>modal placeholder</p>
        </div>
      </div>
    );
  }
}

// function onClickHander() {
//   const root = createRoot(document.getElementById('root'));
//   root.render(<InfoModal />);
// }

// class InfoModal extends React.Component {
//   render() {
//     return (
//       <div className="modal-info">
//         <p>modal placeholder</p>
//       </div>
//     );
//   }
// }