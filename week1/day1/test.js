var expect = require('chai').expect;
var greet = require('./greet.js')

describe('greet function', function(){
  it('should return a personalized greeting', function(){
    expect(greet.greet('Test')).to.eql("hello Test");
  });
});
