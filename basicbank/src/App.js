import React from 'react';
import './App.css'; // Import the CSS file
import './index.css';

const App = () => {
    return (
        <div className="banking-container">
            <div className="gradient-box" />
            <img className="image-placeholder" src="https://via.placeholder.com/427x430" alt="Placeholder 1" />
            <img className="image-placeholder" src="https://via.placeholder.com/396x411" alt="Placeholder 2" />
            <img className="image-placeholder" src="https://via.placeholder.com/413x420" alt="Placeholder 3" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
            <div className="title-container">
                <span className="title">BANKING</span>
                <span className="title-separator"><br /></span>
                <span className="title-unlimited">UNLIMITED</span>
            </div>
            <div className="subtitle">Banking Without Barriers.</div>
            <div className="overview">OVERVIEW</div>
            <div className="overview-details">
                <span className="overview-item">Checking Accounts </span>
                <span className="overview-description">are for daily transactions<br /><br /></span>
                <span className="overview-item">Savings Accounts</span>
                <span className="overview-description"> help grow your funds with interest<br /><br /></span>
                <span className="overview-item">Loans</span>
                <span className="overview-description"> are for major purchases like homes or cars<br /><br />A </span>
                <span className="overview-item">debit/credit card</span>
                <span className="overview-description"> is used for daily purchases, directly or indirectly using your capital, depending on the type<br /><br /></span>
                <span className="overview-item">Investments</span>
                <span className="overview-description"> are an allocation of capital into an asset or project with the goal of generating income or increasing value over time.</span>
            </div>
            <div className="how-it-helps">HOW IT HELPS</div>
            <div className="our-vision">OUR VISION</div>
            <div className="banking-basics">BANKING BASICS</div>
            <div className="call-to-action">START BANKING SMARTER TODAY</div>
            <div className="are-you-ready">ARE YOU READY?</div>
            <div className="read-testimonials">Read What Others Have To Say</div>
            <div className="testimonials">TESTOMONIALS</div>
            <div className="banking-basics-footer">BANKING BASICS</div>
            <div className="button-container">
                <div className="button">Online Banking</div>
                <div className="button">CREATE AN ACCOUNT</div>
            </div>
            <div className="new-to-banking">NEW TO BANKING?</div>
            <div className="button-container">
                <div className="button">Loans</div>
                <div className="button">Investments</div>
            </div>
            <div className="banking-basics-footer">BANKING BASICS</div>
            <div className="introducing">
                <span className="introducing-text">Introducing </span>
                <span className="introducing-title">Banking Basics</span>
            </div>
            <div className="navbar">
                <div className="navbar-item">BANKING UNLIMITED</div>
                <div className="navbar-item">Home</div>
                <div className="navbar-item">Services</div>
                <div className="navbar-item">Contact Us</div>
                <div className="navbar-item">About</div>
                <div className="navbar-item">Checking</div>
                <div className="navbar-item">XXX-XXX-XXX</div>
                <div className="navbar-item">Mission</div>
                <div className="navbar-item">Savings</div>
                <div className="navbar-item">Loans</div>
                <div className="navbar-item">Investments</div>
            </div>
            <div className="testimonial">
                <div className="testimonial-name">Linda R.</div>
                <div className="testimonial-text">Thanks to Banking Unlimited’s ‘Banking Basics’ Modules, I improved my financial literacy...</div>
            </div>
            <div className="testimonial">
                <div className="testimonial-name">David B.</div>
                <div className="testimonial-text">I never expected a banking simulation to help me visualize so well how my financial decisions would impact my money...</div>
            </div>
            <div className="see-more">See More</div>
            <div className="footer">
                <div className="footer-text">BANKING UNLIMITED Home Services Contact Us</div>
                <div className="footer-text">About Checking XXX-XXX-XXX</div>
                <div className="footer-text">Mission Savings Loans Investments</div>
            </div>
            <div className="vision">
                <span className="vision-text">The freedom of </span>
                <span className="vision-highlight">financial literacy </span>
                <span className="vision-text">is right at your fingertips...</span>
            </div>
            <div className="vision">
                <span className="vision-text">Our vision is to create a </span>
                <span className="vision-highlight">financially inclusive world</span>
                <span className="vision-text"> where everyone, regardless of their banking history...</span>
            </div>
            <img className="image-placeholder" src="https://via.placeholder.com/416x410" alt="Placeholder 4" />
        </div>
    );
};

export default App;


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
