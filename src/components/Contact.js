import './Contact.css';
import React from 'react';

export default() => {
  return (<div className="contact ui container">
    <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula porttitor lacus et posuere. Phasellus id egestas neque, a pulvinar felis. Mauris sollicitudin auctor massa at eleifend. Praesent non malesuada lacus. In dictum leo id congue condimentum. Cras tempus porta mauris, quis laoreet tortor.</p>
    <div className="wrapper ui middle aligned list">
      <div className="item">
        <i className="phone icon"/>
        <div className="content">
          <div className="header">+1 212-233-6211</div>
        </div>
      </div>
      <div className="item">
        <i className="envelope icon"/>
        <div className="content">
          <div className="header">
            helen@mail.com</div>
        </div>
      </div>
    </div>
  </div>);
};
