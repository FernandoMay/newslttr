import React, { useState } from 'react';
import axios from 'axios';

const AddRecipient = ({ }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const addRecipient = async () => {
    try {
      await axios.post('http://localhost:8000/api/recipients', { email });
      // Display success message or perform any additional actions
      //handleAlert('Recipient added successfully', 'success');
      setEmail(''); // Reset email input
    } catch (error) {
     // handleAlert('Error adding recipient: ' + error.message, 'error');
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={handleEmailChange} />
      <button onClick={addRecipient}>Add Recipient</button>
    </div>
  );
};

export default AddRecipient;
