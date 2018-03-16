//Create a function called transportFee and pass one parameter shift
var transportFee = function(shift){
  //Use check which shift is it using if staements
  if(shift=== "morning"){
    return "R20";
  }
  else if(shift=== "afternoon"){
    return "R10";
  }
  else{
    return "free";
  }
  console.log(shift);
}
//Call the function
transportFee("morning");
