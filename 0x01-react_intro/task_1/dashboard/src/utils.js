let util;
class Utils{
getFullYear() {
  return('2024');
}
getFooterCopy(isIndex) {
 if (isIndex){
  return("Holberton School")
 }else{
  return ("Holberton School main dashboard")
 }
}
}
util = new Utils();
module.exports = util;
