import React, { useState, useEffect } from 'react';
import api from '../services/api';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import DropDownList from '../components/DropDownList';
import UsersTable from '../components/UsersTable';
import dataTestIds from '../utils/dataTestIds';
import Navbar from '../components/Navbar';

function Admin() {
  const [newUserData, setNewUserData] = useState({
    nome: '', email: '', password: '', role: '',
  });
  const [usersList, setUsersList] = useState([]);
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const adminData = JSON.parse(localStorage.getItem('user'));
  // verifica se pode fazer o cadastro
  const verifyNewUserCredentials = () => {
    const { nome, email, password, role } = newUserData;
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
    if (role === '') {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  const getAllUsers = async () => {
    const myList = await api.getAllUsers();
    setUsersList(myList);
  };

  useEffect(() => {
    verifyNewUserCredentials();
  }, [newUserData, verifyNewUserCredentials]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleRemoveClick = async (event) => {
    const userId = event.target.value;
    await api.removeUserById(userId);
    await getAllUsers();
  };

  const cleanFields = () => {
    const name = document.getElementById('nome');
    name.value = '';
    const email = document.getElementById('email');
    email.value = '';
    const password = document.getElementById('password');
    password.value = '';
    const role = document.getElementById('role');
    role.value = '';
    setNewUserData({ nome: '', email: '', password: '', role: '' });
  };

  const handleClick = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const result = await api.registerUserWithAdmin(newUserData, userData.token);
    if (result.error) {
      setErrorMessage(result.error.message);
    }
    cleanFields();
    await getAllUsers();
  };

  const errorDivMessage = (
    <div>
      <p data-testid={ dataTestIds[75] }>{ errorMessage }</p>
      <button
        type="button"
        onClick={ () => setErrorMessage() }
      >
        OK
      </button>
    </div>
  );

  const options = ['customer', 'seller', 'administrator'];
  return (
    <main>
      <Navbar role={ adminData.role } />
      <div className="container-box">
        <p className="mt-10 title-box">Cadastrar novo usuário</p>
        <section className="box-border-90 justify-between">
          <TextInput
            type="text"
            name="nome"
            onChange={ handleChange }
            labelText="Nome"
            placeholderText="Nome completo"
            dataTestId={ dataTestIds[65] }
            classStyle="ml-2 mt-2 w-1/5 text-xs"
          />
          <TextInput
            type="text"
            name="email"
            onChange={ handleChange }
            labelText="Email"
            placeholderText="email@email.com"
            dataTestId={ dataTestIds[66] }
            classStyle="ml-2 mt-2 w-1/5 text-xs"
          />
          <TextInput
            type="password"
            name="password"
            onChange={ handleChange }
            labelText="Senha"
            placeholderText="senha"
            dataTestId={ dataTestIds[78] }
            classStyle="ml-2 w-1/5 mt-2 text-xs"
          />
          <DropDownList
            options={ options }
            name="role"
            dataTestId={ dataTestIds[68] }
            onChange={ handleChange }
            classStyle="ml-2 w-1/5 mt-2 text-xs"
            labelText="Tipo"
          />
          <LargeButton
            buttonText="CADASTRAR"
            onClick={ handleClick }
            isDisabled={ disableButton }
            dataTestId={ dataTestIds[69] }
            classStyle="ml-2 mr-2 w-1/5 mt-2 btn-green"
          />
          { errorMessage && errorDivMessage }
        </section>
        <h2 className="mt-10 title-box">Lista de Usuários</h2>
        <div className="box-border-90">
          <UsersTable list={ usersList } handleRemove={ handleRemoveClick } />
        </div>
      </div>
    </main>
  );
}

export default Admin;
