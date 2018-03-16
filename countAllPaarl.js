//Create a function called allPaarl with one parameter regNumber
var allPaarl = function(regNumber){
  console.log(regNumber);
  var returnedReg = [];
  // declare a variable to split regNumber
  var sReg = regNumber.split(",");

  //Add a for loop to loop through the list of regNumbers
  for(var i =0; i<sReg.length; i++){

    //Declare avariable to store list of regNumbers
      var listReg = sReg[i].trim();

    //check if regNumber starts with "CJ"
    if(listReg.startsWith("CJ")){

       //Filter list reg into the empty list returnedReg
      returnedReg.push(listReg);
    }//end if statement
  }//eng for loop
  return returnedReg;
  //console.log(returnedReg);
}//End function
