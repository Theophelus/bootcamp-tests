describe('countAllPaarl', function(){
  it('should return all the registration numbers from Paarl', function(){
    assert.deepEqual(allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'), ['CJ 678 543','CJ 67890']);
  });

  it('should handle errors if registration numbers is not from paarl Paar', function(){
    assert.notEqual(allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'), ['CL 900, CA 34567, CN 7864']);
  });
});
