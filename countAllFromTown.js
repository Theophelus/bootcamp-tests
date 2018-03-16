var countAllFromTown = function(regNumber, town){
  console.log(regNumber);
  //Add a list store returned registration numbers
  var returnRegNumber = [];
  // declare a variable to split the list of regNumbers
  var sRegNumber = regNumber.split(",");
  // use if statement to loop through the list of regnumbers
  for(var i=0; i<sRegNumber.length; i++){
    //declare another variable to trim all the speces
    var tRegNumber = sRegNumber[i].trim();
    //filter the results and store in an empty array
    if(tRegNumber.startsWith(town)){
      returnRegNumber.push(tRegNumber);
    }
  }
  return returnRegNumber.length;
}
