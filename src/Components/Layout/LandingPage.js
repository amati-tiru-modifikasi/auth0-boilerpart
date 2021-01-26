import React from 'react'
import { Redirect } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Reusable/LoginButton';


const LandingPage = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) return <Redirect to="/home"/>

  return (
    <LoginButton />
  )
}

export default LandingPage
