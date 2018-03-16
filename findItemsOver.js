//Create another function called findItemsOver
var findItemsOver = function(itemList, threshold){
  console.log(itemList);
  // Create an empty list to store all the returned all the names
  var lItems = [];
  //loop through the list 
  for(var i=0; i<itemList.length; i++){
    //Declare an a variable to store the list
    var listItems = itemList[i];
    //compare list with threshold.
    if(listItems.qty > threshold){
      lItems.push(listItems);
    }
  }
  return lItems;
}
