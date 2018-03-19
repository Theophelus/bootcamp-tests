//It should take string parameters and it shuold return the number of registration in a string
describe('countRegNumber', function(){
  it('should take string parameters and it shuold return the number of registration in a string', function(){
  var regNumberString = 'CA 182736,CY 523519,CJ 812328';
    assert.equal(countRegNumber(regNumberString), 3);
  });
  it('should take string parameters and it shuold return the number of registration in a string', function(){
  var regNumberString = 'CA 182736,CY 523519,CJ 812328, GP 245676';
    assert.equal(countRegNumber(regNumberString), 4);
});
