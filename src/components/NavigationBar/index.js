// NavigationBar.js
import React from 'react';
import './index.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navbar">
       <p className='p'>Pending</p>
       <p className='paragraph'>Accepted</p>
       <p className='paragraph'>AWB Created</p>
       <p className='paragraph'>Ready to Ship</p>
       <p className='paragraph'>Shipped</p>
       <p className='paragraph'>Completed</p>
       <p className='paragraph'>Cancelled</p>
      </div>
    );
  }
}

export default NavigationBar;

