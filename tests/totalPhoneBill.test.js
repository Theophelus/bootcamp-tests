describe('totalPhoneBill', function(){
  it('total phone bill should return R7.45', function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
  });
});
