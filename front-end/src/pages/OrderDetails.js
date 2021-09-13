import React from 'react';
import NavBar from '../components/NavBar';
import OrderDetailsCard from '../components/OrderDetailsCard';
import './Checkout.css';

const OrderDetails = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { role, name } = user;
  return (
    <div className="Checkout-main-wrapper">
      <NavBar
        userType={ role }
        userName={ name }
      />
      <main>
        <OrderDetailsCard />
      </main>
    </div>
  );
};

export default OrderDetails;
