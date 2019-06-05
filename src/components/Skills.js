import './Skills.css';
import React from 'react';

export default() => {
  return (<div className="skills ui container">
    <h1>Skills</h1>
    <div className="wrapper">
      <i className="desktop icon huge"></i>

      <div className="ui middle aligned list">
        <div className="item">
          <div className="content">
            <div className="header">HTML5</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">CSS3</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">JS</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">React</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">Redux</div>
          </div>
        </div>
      </div>
    </div>
    <p>Cras tempus porta mauris, quis laoreet tortor. Pellentesque quis interdum elit. Quisque condimentum, dolor id semper viverra, nibh quam molestie felis, vel tincidunt lectus magna nec neque. Praesent rutrum lacus sit amet posuere consequat.</p>
  </div>);
};
