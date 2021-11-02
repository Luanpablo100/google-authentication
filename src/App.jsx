import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import Presentation from './components/Presentation'

const App = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [profilePic, setProfilePic] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const responseGoogle = (response) => {
    const { profileObj: {name, email, imageUrl} } = response
    setName(name)
    setEmail(email)
    setProfilePic(imageUrl)
    setIsLoggedIn(true)
  }

  return ( 
    <div className="container">
      <Presentation/>
      <GoogleLogin
        clientId="538964692691-5m7nfdq5uh9ni2vt9bb4or2fcoe1vdm6.apps.googleusercontent.com"
        buttonText="Continuar com Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

      {isLoggedIn ? 
      <div style={{textAlign: 'center'}}> 
        <h1>Dados do usuário</h1>
      <img src={profilePic} alt="Profile" />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div> : ""}
      
    </div> 
  );
}
 
export default App;