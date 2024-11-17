import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    setBalance(balance + parseFloat(amount));
    setAmount('');
  };

  const handleWithdraw = () => {
    if (balance >= amount) {
      setBalance(balance - parseFloat(amount));
      setAmount('');
    } else {
      alert("Insufficient funds");
    }
  };

  return (
    <div className="app-container">
      <h1>Bank App</h1>
      <h2>Balance: ${balance.toFixed(2)}</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Enter amount" 
        className="amount-input"
      />
      <div className="button-container">
        <button onClick={handleDeposit} className="button">Deposit</button>
        <button onClick={handleWithdraw} className="button">Withdraw</button>
      </div>
    </div>
  );
};

export default App;