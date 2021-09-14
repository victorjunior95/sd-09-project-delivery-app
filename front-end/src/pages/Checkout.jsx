import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/Navbar';
import LargeButton from '../components/LargeButton';
import TextInput from '../components/TextInput';
import DropDownList from '../components/DropDownCheckout';
import api from '../services/api';
import AppContext from '../context/AppContext';
import testIds from '../utils/dataTestIds';
import { getCarrinhoLocalStorage } from '../utils/storage';
import CardTotal from '../components/CardTotal';

function Checkout() {
  const { totalCart } = useContext(AppContext);
  const [disableButton, setDisableButton] = useState(true);
  const cartData = getCarrinhoLocalStorage();
  const [infoSale, setInfoSalle] = useState({
    deliveryAddress: '', deliveryNumber: '', sellerId: '',
  });
  const [vendorList, setVendorList] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [idVenda, setIdVenda] = useState();

  const user = JSON.parse(localStorage.getItem('user'));

  const fetchVendorList = async () => {
    const vendors = await api.getAllVendors();
    setVendorList(vendors);
  };

  const isDisabledButton = () => {
    const { deliveryAddress, sellerName, deliveryNumber } = infoSale;

    if (deliveryAddress === '' || sellerName === '' || deliveryNumber === '') {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    isDisabledButton();
    fetchVendorList();
  }, [infoSale, isDisabledButton]);

  const handleChange = ({ target: { name, value } }) => {
    setInfoSalle({ ...infoSale, [name]: value });
  };

  const handleSubmit = async () => {
    const saleData = { ...infoSale,
      userId: user.id,
      totalCart: totalCart.replace(',', '.') };
    const result = await api.saveOrder(saleData, cartData, user.token);
    if (result.error) { console.error(`Tratar erro: "${result.error.message}"`); }
    setIdVenda(result);
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect to={ `/customer/orders/${idVenda}` } />
    );
  }
  return (
    <main>
      <Navbar role={ user.role } />
      <div className="container-box">
        <p className="mt-10 title-box">Finalizar Pedido</p>
        <div className="box-border-90 flex-col">
          <CheckoutTable cartData={ cartData } />
          <CardTotal dataTestId={ testIds[28] } totalCart={ totalCart } />
        </div>
        <p className="mt-5 title-box">Detalhes e Endereço para Entrega</p>
        <section className="box-border-90 flex-wrap justify-around">
          <p className="table-detalhe-title title-checkbox">
            {' '}
            P.Vendedora Responsável:
            <DropDownList
              options={ vendorList }
              name="sellerId"
              dataTestId={ testIds[29] }
              onChange={ handleChange }
            />
          </p>
          <TextInput
            type="input"
            name="deliveryAddress"
            onChange={ handleChange }
            labelText="Endereço"
            placeholderText="Travessa Terceira da Castanheira, Bairro Muruci"
            dataTestId={ testIds[30] }
            classStyle="md:w-2/4 w-11/12 md:m-5 text-xs mt-2"
          />
          <TextInput
            type="input"
            name="deliveryNumber"
            onChange={ handleChange }
            labelText="Número"
            placeholderText="1234"
            dataTestId={ testIds[31] }
            classStyle="md:w-1/5 text-xs md:m-5 mt-2 w-11/12"
          />
          <LargeButton
            buttonText="FINALIZAR PEDIDO"
            isDisabled={ disableButton }
            onClick={ handleSubmit }
            dataTestId={ testIds[32] }
            classStyle="btn-green md:w-1/3 md:m-5 w-11/12 mt-2 mb-3"
          />
        </section>
      </div>
    </main>
  );
}
export default Checkout;
