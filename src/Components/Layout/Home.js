import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "../Reusable/LogoutButton";


const Home = () => {
  const { user } = useAuth0();

  return (
    <>
      <LogoutButton />

      <br />
      
      Authenicated: {JSON.stringify(user.given_name)}
    </>
  )
}

export default Home;
