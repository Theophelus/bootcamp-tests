describe('isFromBellville', function(){
  it('should check if the the reg Number is from Bellville', function(){
    var numbers = 'CY';
    assert.equal(isFromBellville('CY'), true);
  });
  it('should return false is registration is not from Bellville', function(){
    var numbers = 'CJ';
    assert.equal(isFromBellville('CJ'), false);
  });
});
