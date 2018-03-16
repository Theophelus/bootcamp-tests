//Create a function called fromWhere that have one parameter registration number
var fromWhere = function(regNumber){
  //Use if statement to check if regNumber starts with
  if(regNumber.startsWith("CY")){
    return "Bellville";
  }
     else if(regNumber.startsWith("CJ")){
    return "Paarl";
  }
  else if(regNumber.startsWith("CA")){
    return "Cape Town";
  }
  else{
    return "Some other place!";
  }
  console.log(fromWhere(regNumber));
}
