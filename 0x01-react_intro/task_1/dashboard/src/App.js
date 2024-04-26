import logo from './175b85183ecedb529e14.jpg';
import util from './utils.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1>School dashboard</h1>
      </header>
      <div className="App-line"></div>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <div className="App-line"></div>
      <footer className="App-footer">
        <p>Copyright {util.getFullYear()} - {util.getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
