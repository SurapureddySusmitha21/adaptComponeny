// OrderTable.js
import React from 'react';
import './index.css';

class OrderTable extends React.Component {
  render() {
    return (
      <div className="order-table">
       <table>
        <tr>
          <th>Channel</th>
          <th>Order No</th>
          <th>Order Date</th>
          <th>City</th>
          <th>Customer Name</th>
          <th>Order Value</th>
          <th> Status</th>
          <th>Operation</th>
        </tr>
        <tr>
        <td></td>
          <td>
          #TKN20203754
            
          </td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek Dixit</td>
          <td>0.00</td>
          <td className='pending'>Pending</td>
          <td>Actions</td>
        </tr>
        <tr><td></td>
          <td>
          #TKN20203754
            
          </td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek Dixit</td>
          <td>0.00</td>
          <td className='pending'>Pending</td>
          <td>Actions</td></tr>
        <tr><td></td>
          <td>
          #TKN20203754
            
          </td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek Dixit</td>
          <td>0.00</td>
          <td className='pending'>Pending</td>
          <td>Actions</td></tr>
       </table>
      </div>
    );
  }
}

export default OrderTable;