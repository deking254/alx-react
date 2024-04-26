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
getLatestNotification() {
  return ("<strong>Urgent requirement</strong> - complete by EOD")
}
}
util = new Utils();
module.exports = util;
