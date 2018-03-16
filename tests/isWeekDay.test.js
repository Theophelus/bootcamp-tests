describe('isWeekDay', function(){
  it('should return a day in a week', function(){
    assert.equal(isWeekday('Monday'), false);
  });
  it('should fail if the day is in a weekday', function(){
    assert.equal(isWeekday('sunday'), true);
  });
});
