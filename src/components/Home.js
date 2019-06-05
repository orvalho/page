import './Home.css';
import React from 'react';
import Attribution from './Attribution';

export default() => {
  return (<div className="home ui container">
    <h1>Hello, my name is Helen. I'm a developer.</h1>
    <img src="page/img/photo.png" alt="helen"/>
    <Attribution/>
    <p>Cras tempus porta mauris, quis laoreet tortor. Pellentesque quis interdum elit. Quisque condimentum, dolor id semper viverra, nibh quam molestie felis, vel tincidunt lectus magna nec neque. Praesent rutrum lacus sit amet posuere consequat.
    </p>
  </div>);
};
