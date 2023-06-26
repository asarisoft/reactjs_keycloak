import React, { useEffect, useState } from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { useHistory } from 'react-router-dom';


const Login = () => {
  const { keycloak } = useKeycloak();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (keycloak.authenticated) {
      history.push("/")
    } 
  }, [keycloak.authenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await keycloak.login({
        username: username,
        password: password,
      });
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  const handleLoginByKeycloack = () => {
    keycloak.login();
  };


  return (
    <div>
      <h2>Login With Keycloack</h2>
      <button onClick={()=>handleLoginByKeycloack()}>Login with Keycloak</button>

      <h2>Login Keycloack with our interface</h2>
      <form onSubmit={()=>handleLogin()}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;