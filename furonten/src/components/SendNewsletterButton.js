import React from 'react';
import axios from 'axios';

const SendNewsletterButton = () => {
  const sendNewsletter = async () => {
    try {
      await axios.post('http://localhost:8000/api/send-newsletter');

      // Display success message or perform any additional actions
    } catch (error) {
      console.error('Error sending newsletter:', error);
    }
  };

  return (
    <div>
      <button onClick={sendNewsletter}>Send Newsletter</button>
    </div>
  );
};

export default SendNewsletterButton;
