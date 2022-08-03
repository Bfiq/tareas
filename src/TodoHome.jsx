import './TodoHome.css';
import React from 'react';
import img1 from './images/ani3.png';
import img2 from './images/anim5.png';

function TodoHome() {
  return (
    <React.Fragment>
        <div className='img'>
          <img src={img2} className="bubble"/>
          <img src={img1} />
        </div>
      </React.Fragment>
  );
}

export {TodoHome};
