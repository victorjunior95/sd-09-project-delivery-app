import React, { useContext } from 'react';
// import CheckoutCard from '../components/CheckoutCard';
import OrderDetailsCard from '../components/OrderDetailsCard';
import NavBar from '../components/NavBar';
import { LoginContext } from '../context/loginContext';
import './Checkout.css';

const OrderDetails = () => {
  const { name, role } = useContext(LoginContext);
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
