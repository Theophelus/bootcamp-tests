describe('regCheck', function(){
  it('should check if the registration number belong to which city', function(){
    var regNumber = "'CY189-012'";
    var location = "CY";
    assert.equal(regCheck(regNumber, location), false);
  });
});
