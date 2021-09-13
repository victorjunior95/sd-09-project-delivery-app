import React from 'react';
import NavBar from '../components/NavBar';

const AllOrders = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { role, name } = user;
  return (
    <div className="Checkout-main-wrapper">
      <NavBar
        userType={ role }
        userName={ name }
      />
      <h1>AQUI VAI TODOS PEDIDOS!!</h1>
    </div>
  );
};

export default AllOrders;
