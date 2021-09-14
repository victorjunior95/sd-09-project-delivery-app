import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import dataTestIds from '../utils/dataTestIds';
import inscricao from '../images/inscricao.png';

function Register() {
  // estados para utilizar na pagina
  const [newUserData, setNewUserData] = useState({
    nome: '', email: '', password: '', role: 'customer',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  // verifica se pode fazer o cadastro
  const verifyNewUserCredentials = () => {
    const { nome, email, password } = newUserData;
    const minNameLength = 12;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (nome.length < minNameLength) {
      setDisableButton(true);
      return;
    }
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

  useEffect(() => {
    verifyNewUserCredentials();
  }, [newUserData, verifyNewUserCredentials]);

  const handleChange = ({ target: { name, value } }) => {
    setNewUserData({ ...newUserData, [name]: value });
  };

  const history = useHistory();

  const handleClick = async () => {
    const result = await api.registerUser(newUserData);
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      localStorage.setItem('user', JSON.stringify(result));
      history.push('/customer/products');
    }
  };

  const cleanFields = () => {
    setErrorMessage();
    const name = document.getElementById('nome');
    name.value = '';
    const email = document.getElementById('email');
    email.value = '';
    const password = document.getElementById('password');
    password.value = '';
    setNewUserData({ nome: '', email: '', password: '', role: 'customer' });
  };

  const errorDivMessage = (
    <div className="message-error">
      <p data-testid={ dataTestIds[10] }>{ errorMessage }</p>
      <button
        className="ml-2 font-bold"
        type="button"
        onClick={ cleanFields }
      >
        X
      </button>
    </div>
  );
  return (
    <main className="content-login-register">
      <img
        className="w-3/5"
        src={ inscricao }
        alt="Uma mulher com um rostinho feliz andando de moto, levando bebidas"
      />
      <section className="fundo-login-register">
        <h1 className="title-login-register">Cadastro</h1>
        <TextInput
          type="text"
          name="nome"
          onChange={ handleChange }
          labelText="Nome"
          placeholderText="Nome completo"
          dataTestId={ dataTestIds[6] }
        />
        <TextInput
          type="text"
          name="email"
          onChange={ handleChange }
          labelText="E-mail"
          placeholderText="email desejado"
          dataTestId={ dataTestIds[7] }
        />
        <TextInput
          type="password"
          name="password"
          onChange={ handleChange }
          labelText="Senha"
          placeholderText="senha"
          dataTestId={ dataTestIds[8] }
        />
        {errorMessage && errorDivMessage}
        <LargeButton
          buttonText="CADASTRAR"
          onClick={ handleClick }
          isDisabled={ disableButton }
          dataTestId={ dataTestIds[9] }
          classStyle="btn-green"
        />
      </section>
    </main>
  );
}

export default Register;
