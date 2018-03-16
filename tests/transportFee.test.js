describe('transportFee', function(){
  it('should return R20 transport cost if shift is in the morning', function(){
    assert.equal(transportFee('morning'), 'R20');
  });

  it('should return R10 transport cost if shift is in the afternoon', function(){
    assert.equal(transportFee('afternoon'), 'R10');
  });
  it('should return free if its night shift', function(){
    assert.equal(transportFee('night shift'), 'free');
  });
  it('no shift, no transport');
});
