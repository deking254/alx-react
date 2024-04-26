import * as css from '../css/main.css';
const jquery = require("jquery");
const {debounce} = require("lodash");
jquery("body").append("<div id='logo'></div>\n<p>Holberon dashboard</p>\n<p>Dashboard data for the students</p>\n <button>Click here to get started</button>\n<p id='count'></p>\n<p>Copyright - Holberton school</p>")
let count = 0;
function updateCounter(){
    count += 1;
    jquery("p#count").toArray()[0].innerHTML = `${count} clicks on the button`
  };

jquery("button").on('click', debounce(updateCounter, 1000));
