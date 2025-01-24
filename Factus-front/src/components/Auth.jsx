import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState(null);

  const authenticate = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/oauth/token`; 
    const data = {
      grant_type: 'password',
      client_id: import.meta.env.VITE_CLIENT_ID, 
      client_secret: import.meta.env.VITE_CLIENT_SECRET ,
      username: import.meta.env.VITE_USERNAME,
      password: import.meta.env.VITE_PASSWORD
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      // Guarda el access token
      setAccessToken(response.data.access_token);
      localStorage.setItem('access_token', response.data.access_token);
      console.log('Access Token:', response.data.access_token);
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data : 'Error de conexión');
    }
  };

  return (
    <div>
      <h1>Autenticación</h1>
      <button className='bg bg-sky-400' onClick={authenticate}>Generar Token</button>
      {accessToken && <p>Access Token: {accessToken}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default Auth;
