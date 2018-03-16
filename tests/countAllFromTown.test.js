describe('countAllCapeTown', function(){
  it('should return all registration numbers from Cape Town', function(){
    assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'), 3);
  });

  it('should return all registration numbers from Cape Town', function(){
    assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'), 0);
  });
});
