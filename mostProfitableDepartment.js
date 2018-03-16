//Create a function called mostProfitablrDepartment with one parameter departments
var mostProfitableDepartment = function(saleData){
  //console.log(saleData);
  //Declare an empty map to store department
  var departmentMap = {};
  var departmentName = ' ';
  var max = 0;
  for(var i=0; i<saleData.length; i++){
    //Add another variable to store all the current departments
    var currentMap = saleData[i];
    //Check if the current depertment exists and add in the map
    if(departmentMap[currentMap.department] === undefined){
      departmentMap[currentMap.department] = 0;
    }
     //Increment the current map by 1
      departmentMap[currentMap.department] += currentMap.sales;
    }
  console.log(departmentMap);

  //Loop through the department map list
for(var departments in departmentMap){
    if(departmentMap[departments] > max){
      max = departmentMap[departments];
      departmentName = departments;
      console.log(departmentName);
    }
  }
  return departmentName;
}