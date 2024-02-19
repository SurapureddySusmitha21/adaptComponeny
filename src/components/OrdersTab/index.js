// OrdersTab.js
import React from 'react';
import './index.css';

class OrdersTab extends React.Component {
  render() {
    return (
      <div className='box-con'>
      <div className="orders-tab">
        <p className='order-p'>Import Orders</p>
        <p className='order-s'>Accept</p>
        <p className='order-s'>Print</p>
      
      <p className='refr'>Refresh</p>
      </div></div>
    );
  }
}

export default OrdersTab;
