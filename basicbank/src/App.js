import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleDeposit = () => {
        const depositAmount = parseFloat(amount);
        if (!isNaN(depositAmount) && depositAmount > 0) {
            setBalance(balance + depositAmount);
            setAmount('');
            setMessage('');
        }
    };

    const handleWithdraw = () => {
        const withdrawAmount = parseFloat(amount);
        if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
            setBalance(balance - withdrawAmount);
            setAmount('');
            setMessage('');
        }
    };

    const handleLoan = () => {
        setMessage('Loan feature is not implemented yet.');
    };

    const handleInvestment = () => {
        setMessage('Investment feature is not implemented yet.');
    };

    return (
        <div className="banking-container">
            <h1>Banking Simulation</h1>
            <h2>Balance: ${balance.toFixed(2)}</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="amount-input"
            />
            <div className="button-container">
                <button onClick={handleDeposit} className="button deposit">Deposit</button>
                <button onClick={handleWithdraw} className="button withdraw">Withdraw</button>
            </div>

            <div className="button-container">
                <button onClick={handleLoan} className="button loan">Loan</button>
                <button onClick={handleInvestment} className="button investment">Invest</button>
            </div>

            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default App;

// import React, { useState, useEffect } from 'react';

// // Define a functional component
// const App = () => {
//   // Define state variables
//   const [accounts, setAccounts] = useState([]);
//   const [newAccount, setNewAccount] = useState('');

//   // Fetch accounts from the backend on component mount
//   useEffect(() => {
//     fetch('http://localhost:5000/accounts')
//       .then(response => response.json())
//       .then(data => setAccounts(data))
//       .catch(error => console.error('Error fetching accounts:', error));
//   }, []);

//   // Handle adding a new account
//   const addAccount = () => {
//     fetch('http://localhost:5000/accounts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name: newAccount }),
//     })
//       .then(response => response.json())
//       .then(data => setAccounts([...accounts, data]))
//       .catch(error => console.error('Error adding account:', error));
//   };

//   return (
//     <div>
//       <h1>Banking Simulation</h1>
//       <input
//         type="text"
//         value={newAccount}
//         onChange={(e) => setNewAccount(e.target.value)}
//         placeholder="New Account Name"
//       />
//       <button onClick={addAccount}>Add Account</button>
//       <ul>
//         {accounts.map((account, index) => (
//           <li key={index}>{account.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Export the component
// export default App;
