// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

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
    <div>
      <h1>Bank App</h1>
      <h2>Balance: ${balance}</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Enter amount" 
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default App;