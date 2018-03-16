describe('findItemsOver20', function(){
  it('should return all products that are over 20', function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    assert.deepEqual(findItemsOver20(itemList), [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},]);
  });
});
