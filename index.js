// Write your code in this file!
function getUKTime(){
  var result= new Date().getHours() +5;
  return result;
}

getUKTime();

function discountTickets(oldPrice) {
  var newPrice= oldPrice * 0.2;
  return newPrice;
}
discountTickets();