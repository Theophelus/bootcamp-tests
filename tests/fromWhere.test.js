describe('fromWhere', function(){
  it('if registration numbers starts with CY should return Bellville', function(){
    assert.equal(fromWhere('CY'), 'Bellville');
  });
  it('if registration numbers starts with CJ should return Paarl', function(){
    assert.equal(fromWhere('CJ'), 'Paarl');
  });
  it('if registration numbers starts with CA should return Cape Town', function(){
    assert.equal(fromWhere('CA'), 'Cape Town');
  });
  it('Some other place!');
});
