var countRegNumber = function(regNumber){
  //declare a variable to store split registration
  var splitRegNumber = regNumber.split(",").length;
  //return what ever is split on the registration
  return splitRegNumber;
}
//var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
//assert.equal(regCount, 3)
