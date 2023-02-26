import React from 'react';
import {useNavigate } from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-c14w5udzhe0t2tf3.us.auth0.com";
  const clientId = "OTyK9YrxjyIROT6W8r6LBW7WGtFwqEgU";

  const history = useNavigate();

  const onRedirectCallback = (appState) => {
    history(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
