import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import logoDelivery from '../images/DeliveryFast.png';
import api from '../services/api';
import dataTestIds from '../utils/dataTestIds';

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [disableButton, setDisableButton] = useState(true);
  const { errorMessage, setErrorMessage } = useContext(AppContext);

  const verifyLoginCredentials = () => {
    const { email, password } = loginData;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    if (password.length < minPasswordLength) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  const userRedirect = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };

  const history = useHistory();

  const verifyIfAlreadyLogged = () => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData !== null) {
      history.push(userRedirect[userData.role]);
    }
  };

  useEffect(() => {
    verifyIfAlreadyLogged();
  });

  useEffect(() => {
    verifyLoginCredentials();
  }, [loginData, verifyLoginCredentials]);

  const handleChange = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleClick = async () => {
    const result = await api.loginUser(loginData);
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      setErrorMessage('');
      localStorage.setItem('user', JSON.stringify(result));
      history.push(userRedirect[result.role]);
      // switch (result.role) {
      // case 'administrator':
      //   history.push('/admin/manage');
      //   break;
      // case 'seller':
      //   history.push('/seller/orders');
      //   break;
      // default:
      //   history.push('/customer/products');
      //   break;
      // }
    }
  };

  const errorDivMessage = (
    <div className="message-error">
      <p data-testid={ dataTestIds[5] }>{ errorMessage }</p>
      <button
        className="ml-2 font-bold"
        type="button"
        onClick={ () => setErrorMessage() }
      >
        X
      </button>
    </div>
  );

  return (
    <main className="content-login">
      <section className="content-login">
        {/* <h1>Fast Delivery</h1> */}
        <img className="w-3/5" src={ logoDelivery } alt="app logo" />
      </section>
      <section className="fundo-login">
        <h1 className="font-black text-5xl mb-10">Bem vindo(a)!</h1>
        <TextInput
          type="text"
          name="email"
          onChange={ handleChange }
          labelText="Login"
          placeholderText="email@appdelivery.com.br"
          dataTestId={ dataTestIds[1] }
        />
        <TextInput
          type="password"
          name="password"
          onChange={ handleChange }
          labelText="Senha"
          placeholderText="************"
          dataTestId={ dataTestIds[2] }
        />
        {errorMessage && errorDivMessage}
        <LargeButton
          buttonText="LOGIN"
          isDisabled={ disableButton }
          onClick={ handleClick }
          dataTestId={ dataTestIds[3] }
          classStyle="btn-green"
        />
        <Link to="/register">
          <LargeButton
            buttonText="Ainda não tenho conta"
            onClick={ () => {} }
            dataTestId={ dataTestIds[4] }
            classStyle="btn-border-green"
          />
        </Link>
      </section>
    </main>
  );
}

export default Login;
