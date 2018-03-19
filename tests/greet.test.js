describe('greet', function(){
  it('should say Hello Janine',  function(){
    assert.equal(greet('Janine'), 'Hello, Janine');
  });
  it('should say Hello Anele', function(){
    assert.equal(greet('Anele'), 'Hello, Anele');
  });
  it('should say Hello Jean-Pierre', function(){
    assert.deepEqual(greet('Jean-Pierre'), 'Hello, Jean-Pierre');
  });
});
