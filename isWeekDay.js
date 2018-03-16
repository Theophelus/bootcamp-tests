var isWeekday = function(weekday){
  var weekdays = !weekday.startsWith("M");
  return weekdays;
}
// Call it
console.log(isWeekday("Monday"));
console.log(isWeekday("Sunday"));
