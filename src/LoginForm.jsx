import React, { useState } from 'react';
import './LoginForm.css';

import Hangman from './Hangman';
import Dashboard from './Dashboard';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [DashboardIn, setDashboardIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleLogin = () => {
    // Aquí puedes realizar la autenticación del usuario y verificar si su nombre de usuario es válido
    // Si el usuario ha iniciado sesión correctamente, establece el estado de loggedIn en true
    setLoggedIn(true);
  }

  const handleDashboard = () => {
    // Aquí puedes redirigir al usuario al componente Dashboard
    
    setDashboardIn(true)
  }

  // Si el usuario ha iniciado sesión correctamente, muestra el componente Hangman
  if (loggedIn) {
    return <Hangman />;
  }
  if(DashboardIn){
    return  <Dashboard />;
  }

  // De lo contrario, muestra el formulario de inicio de sesión
  return (
    <form className="login-form">
      <label htmlFor="username">Nombre:</label>
      <input type="text" id="username" value={username} onChange={handleUsernameChange} />

      <div className="buttons-container">
        <button type="button" onClick={handleLogin} className="login-button">Login</button>
        <button type="button" onClick={handleDashboard} className="dashboard-button">Dashboard</button>
      </div>
    </form>
  );
}

export default LoginForm;
