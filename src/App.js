
// OrderDashboard.js
import React from 'react';
import NavigationBar from './components/NavigationBar';
import OrdersTab from './components/OrdersTab';
import OrderTable from './components/OrderTable';
import './App.css';

const App=()=> (
  <div className=''>
    

      <div className="order-dashboard">
        <NavigationBar />
        <OrdersTab />
        <OrderTable />
      </div>
      </div>
    );
  
export default App;








