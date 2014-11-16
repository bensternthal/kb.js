var kb = require("../kb"),
    assert = require("assert");

var kanbanery = kb.createClient();

describe('Authentication', function(){

  describe('test()', function(){
    it('should return true', function(){
      var ret = kanbanery.test();
      assert(ret == true);
    })
  })


})
