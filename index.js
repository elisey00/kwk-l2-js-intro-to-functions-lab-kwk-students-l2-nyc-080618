// Write your code in this file!
function getUKTime(){
  var result= new Date().getHours() +5;
  return result;
}

getUKTime();

function discountTickets(oldPrice) {
  var newPrice= oldPrice * 0.8;
  return newPrice;
}

function tweetReply(name){
  var tweet= "Hey" + name + ",thanks so much for the support! I appreciate it!";
  return tweet;
  
}
tweetReply(Elise);