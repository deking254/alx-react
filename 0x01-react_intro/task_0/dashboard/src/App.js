/*import logo from './175b85183ecedb529e14.jpg';*/
import './App.css';
let selectedUser = {email: 'kenedie@gmail.com'};
let messages = [{senderIsUser: true, text: 'Good morning, Ken'}, {senderIsUser: false, text: 'Good morning, Aj'}, {senderIsUser: true, text: 'How is Stella and the kids'}, {senderIsUser: false, text: 'They are all good. Stacey misses her favourite unc'}, {senderIsUser: true, text: "I will be in the country for a couple of weeks. I will come visit"}, {senderIsUser: true, text: "Take it easy with the travelling"}, {senderIsUser: true, text:"I am used to it now"}, {senderIsUser: false, text:"I just take my sleeping pills and thats it"}, {senderIsUser: true, text: "hehe"}]
function App() {
  return (
	 
   <div className="Chat-container">
         <h3>Chat with {selectedUser.email}</h3>
	 <div className="messages">
	  {messages.map((message, index)=> (
            <div key={index} className={message.senderIsUser ? "Chat-right" : "Chat-left" }>
		  <div className="message">
		  <strong>{message.senderIsUser ? 'You' : selectedUser.email}</strong>: {message.text} 
		  </div>
	    </div>
	    ))

	  }
	 </div>
	 <div className="input-container">
	   <input
            type="text"
	    onchange={(e) => console.log(e.target.value)}
	    placeholder = "Type a message..."
	   />
	  <button>Send</button>
	 </div>
   </div>
  );
}

export default App;
