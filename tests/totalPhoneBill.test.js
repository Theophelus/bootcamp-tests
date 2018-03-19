describe('totalPhoneBill', function(){
  it('total phone bill should return R7.45', function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
  });
  it('total phone bill should return R6.15 if two and one sms', function(){
    assert.equal(totalPhoneBill('call, sms, call'),'R6.15');
  });
  it('total phone bill should return R5.5 if two calls ', function(){
    assert.equal(totalPhoneBill('call, call'),'R5.50');
  });
  it('total phone bill should return R1.95 if only sms', function(){
    assert.equal(totalPhoneBill('sms, sms, sms'),'R1.95');
  });
});
