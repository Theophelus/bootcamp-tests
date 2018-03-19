describe('regCheck', function(){
  it('should check if the registration number belong to which city', function(){
    assert.equal(regCheck('CR 189-012 CY', 'CY'), true);
  });
  it('should check if the registration number belong to which city', function(){
    assert.equal(regCheck('CJ 189-012', 'CJ'), false);
  });
  it('should check if the registration number belong to which city', function(){
    assert.equal(regCheck('CY 189-012', 'ND'), false);
  });
  it('should check if the registration number belong to which city', function(){
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
});
