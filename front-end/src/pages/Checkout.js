import React, { useContext } from 'react';
import CheckoutCard from '../components/CheckoutCard';
import NavBar from '../components/NavBar';
import { LoginContext } from '../context/loginContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, setCart } = useContext(LoginContext);
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="Checkout-main-wrapper">
      <NavBar
        userType={ role }
        userName={ name }
      />
      <main>
        <CheckoutCard cart={ cart } setCart={ setCart } />
      </main>
    </div>
  );
};

export default Checkout;
