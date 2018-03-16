//Create a function called findItemOver that take parameters
var findItemsOver20 = function(itemList){
  console.log(itemList);
  //declare a temorally storage for items over 20
  var max = 20;
  var itemsMap = [];
  //loop through the lidt of items
  for(var i=0; i< itemList.length; i++){
    //Declare a variable to store itemList
    var shoppingList = itemList[i];
    //check all the list that have quantity that is greater > 20
    if(shoppingList.qty > max){
      itemsMap.push(shoppingList);
    }
  }
  return itemsMap;
}
