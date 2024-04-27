import logo from './175b85183ecedb529e14.jpg';
import util from './utils.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div role='header-div' className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1>School dashboard</h1>
      </div>
      <div className="App-line"></div>
      <div role='body-div' className="App-body">
        <p>Login to access the full dashboard</p>
	<div className="inputs">
	<div className="inputAndLabel">
	  <label>Email
	  <input></input>
	  </label>
	</div>
	<div className="inputAndLabel">
	  <label>Password
	  <input id="password"></input>
	  </label>
	</div>
	<button>OK</button>
	</div>
      </div>
      <div className="App-line"></div>
      <div role='footer-div' className="App-footer">
        <p>Copyright {util.getFullYear()} - {util.getFooterCopy()}</p>
      </div>
    </div>
    /*(<header>
      <div className="App-header">
	  <img src={logo} className="App-logo" alt="logo" />
	  <h1>School dashboard</h1>
      </div>
    </header>)
    (<body>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
	<div className="inputs">
	  <div className="inputAndLabel">
	    <label>
              Email:
	      <input />
	    </label>
          </div>
	</div>
      </div>
    </body>)
    (<footer>
      <div className="App-footer">
        <p>Copyright {util.getFullYear()} - {util.getFooterCopy()}</p>
      </div>
    </footer>)*/
  );
}

export default App;
