// import React, { useState } from 'react';
// import './App.css'; // Import the CSS file

// const App = () => {
//   const [balance, setBalance] = useState(0);
//   const [amount, setAmount] = useState('');

//   const handleDeposit = () => {
//     setBalance(balance + parseFloat(amount));
//     setAmount('');
//   };

//   const handleWithdraw = () => {
//     if (balance >= amount) {
//       setBalance(balance - parseFloat(amount));
//       setAmount('');
//     } else {
//       alert("Insufficient funds");
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Bank App</h1>
//       <h2>Balance: ${balance.toFixed(2)}</h2>
//       <input 
//         type="number" 
//         value={amount} 
//         onChange={(e) => setAmount(e.target.value)} 
//         placeholder="Enter amount" 
//         className="amount-input"
//       />
//       <div className="button-container">
//         <button onClick={handleDeposit} className="button">Deposit</button>
//         <button onClick={handleWithdraw} className="button">Withdraw</button>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';

// Define a functional component
const App = () => {
  // Define state variables
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState('');

  // Fetch accounts from the backend on component mount
  useEffect(() => {
    fetch('http://localhost:5000/accounts')
      .then(response => response.json())
      .then(data => setAccounts(data))
      .catch(error => console.error('Error fetching accounts:', error));
  }, []);

  // Handle adding a new account
  const addAccount = () => {
    fetch('http://localhost:5000/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newAccount }),
    })
      .then(response => response.json())
      .then(data => setAccounts([...accounts, data]))
      .catch(error => console.error('Error adding account:', error));
  };

  return (
    <div>
      <h1>Banking Simulation</h1>
      <input
        type="text"
        value={newAccount}
        onChange={(e) => setNewAccount(e.target.value)}
        placeholder="New Account Name"
      />
      <button onClick={addAccount}>Add Account</button>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>{account.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the component
export default App;
