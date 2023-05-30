import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipientList = () => {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    fetchRecipients();
  }, []);

  const fetchRecipients = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/recipients');
      setRecipients(response.data.recipients);
    } catch (error) {
      console.error('Error fetching recipients:', error);
    }
  };

  return (
    <div>
      <h3>Recipient List</h3>
      <ul>
        {recipients.map((recipient) => (
          <li key={recipient.id}>{recipient.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipientList;
