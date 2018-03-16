function isFromBellville (numbers){
  var regNumbers =  numbers.startsWith("CY");
  return regNumbers;
}
console.log(isFromBellville('CY 24987'));
console.log(isFromBellville('CJ 32398'))
//isFromBellville("CY 20936, Bellville");
