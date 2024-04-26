import React from 'react';
import utils from './utils';
import './Notifications.css';
function Notifications(){
return(
	<div className="Notifications" style={{'border': 'dashed', "height": "120px", "borderColor": "red"}}>
          <p style={{float: "left"}}>Here is the list of notifications</p>
	  <button style={{float: "right"}} aria-label="close" onClick={console.log('Close button has been clicked')}>
            <img alt="closeButton" src="" />
	  </button>
	<ul style={{float: "left", position: "absolute", "marginTop": "50px"}}>
          <li data-priority="default">New Course available</li>
	  <li data-priority = 'urgent'>New resume available</li>
	  <li dangerouslySetInnerHTML={{__html: utils.getLatestNotification()}}></li>
	</ul>
	</div>
);
}
export default Notifications;
