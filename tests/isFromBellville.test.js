describe('isFromBellville', function(){
  it('should check if the the reg Number is from Bellville', function(){
    var numbers = 'CY';
    assert.equal(isFromBellville(numbers), true);
  });
  it('should check if the the reg Number is from Bellville', function(){
    var numbers = 'CJ';
    assert.equal(isFromBellville(numbers), false);
  });
});
