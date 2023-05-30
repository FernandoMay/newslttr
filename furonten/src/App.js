import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RecipientList from './components/RecipientList';
import AddRecipient from './components/AddRecipient';
import NewsletterUpload from './components/NewsletterUpload';
import SendNewsletterButton from './components/SendNewsletterButton';

function App() {
  // const [alert, setAlert] = useState(null);

  // const handleAlert = (message, type) => {
  //   setAlert({ message, type });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1618); // La alerta se oculta después de 3 segundos
  // };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Newsletter</h1>
      {/* {setAlertMessage && <AddRecipient/>} */}
      <AddRecipient/>
      <NewsletterUpload/>
      {/* {alertMessage && <div className="alert">{alertMessage}</div>} */}
      {/* <div>
      <button onClick={handleShowAlert}>Mostrar Alerta</button>
      {showAlert && (
        <div className="alert">
          <p>¡Este es un mensaje de alerta!</p>
        </div>
      )}
    </div> */}
      </header>
      
      <RecipientList/>
      
      <SendNewsletterButton/>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
