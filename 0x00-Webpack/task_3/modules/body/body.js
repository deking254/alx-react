import * as css from './body.css';
const jQuery = require("jquery");
const {debounce} = require("lodash");
jQuery("body").append("<div id='body'><button>Click here to get started</button>\n<p id='count'></p></div>");
let count = 0;
function updateCounter(){
  count += 1;
  jQuery("p#count").toArray()[0].innerHTML = `${count} clicks on the button`;
};
jQuery("button").on('click', debounce(updateCounter, 100));
