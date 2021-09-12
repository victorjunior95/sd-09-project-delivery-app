import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthDataContext, useUserDataContext } from '../../context/contexts';
import paths from '../../routes/paths';
import redirectByRole from '../../routes/redirectByRole';

const HomePage = () => {
  // const { auth: { isAuthenticated }, user } = useContext(AppContext);
  const isAuthenticated = useAuthDataContext();
  const { role } = useUserDataContext;

  if (isAuthenticated) return redirectByRole(role);

  return <Redirect to={ paths.login } />;
};

export default HomePage;
