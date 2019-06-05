import React from 'react';
import {Link} from 'react-router-dom';

export default() => {
  return (<div className="header ui secondary pointing menu">
    <Link className="item" to="/">Home</Link>
    <div className="right menu">
      <Link className="item" to="/skills">Skills</Link>
      <Link className="item" to="/contact">Contact</Link>
    </div>
  </div>);
}
