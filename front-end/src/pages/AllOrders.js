import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OrderedCard from '../components/OrderedCard';
import './AllOrders.css';

const AllOrders = () => {
  const { token, id, name, role } = JSON.parse(localStorage.getItem('user'));
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    async function fetchOrder() {
      const theHeaders = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
        },
      };
      await fetch(`http://localhost:3001/customer/orders/allordersfrom/${id}`, theHeaders)
        .then((response) => response.json())
        .then((data) => setOrderData(data))
        .catch((err) => console.log(err));
    }
    fetchOrder();
  }, []);

  return (
    <div className="main-wrapper-AllOrders">
      <NavBar
        userType={ role }
        userName={ name }
      />
      <button type="button" onClick={ () => console.log(orderData) }>Click</button>
      <div className="AllOrders-container">
        { orderData && orderData.map((element, index) => (
          <OrderedCard
            className="AllOrders-card"
            key={ index }
            data={ element }
            index={ index }
          />
        )) }
      </div>
    </div>
  );
};

export default AllOrders;
