describe('greet', function(){
  it('should say Hello Janine',  function(){
    var name = 'Janine';
    assert.equal(greet(name), 'Hello, Janine');
  });
});
