//Create a function called totalPhoneBill that takes two parameters callsMade and smsSent.
var totalPhoneBill = function(myString){
  // Declare three variables for totalBill calls and sms
  var calls = 0;
  var sms = 0;
  var totalBill = 0;
  //Declare constant variables for perCall and perSms
  const perCall = 2.75;
  const perSms = 0.65;
  //Split myString string into a list
  var sMyString = myString.split(",");
   for(var i=0; i<sMyString.length; i++){
     //trim
     var tMyString = sMyString[i].trim();
    //Check if calls starts with letter "c" and sms starts with "s" and increment everytime a call and sms found.
     if(tMyString.startsWith("c")){
       calls++;
     }
     else if(tMyString.startsWith("s")){
      sms++;
     }
   }
  //Calculate the total phone bill and return the total Bill
  totalBill = (calls * perCall + sms * perSms);
  return "R" + totalBill.toFixed(2);
}
