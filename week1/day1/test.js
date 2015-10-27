var expect = require('chai').expect;
var greet = require('./greet.js')
// var str = 'some string'

//this is mocha
describe('greet function', function(){
  // it('should return a string', function(done){

  //   //this is chai
  //   expect(str).to.be.a('string');
  //   expect(str).to.eql('some string');
  //   // done();
  // });
  // it('should equal some string', function(done) {
  //   expect(str.to)
  // }
  it('should return a personalized greeting', function(){
    expect(greet.greet('Test')).to.eql("hello Test");
  });
  //it('should be a number', function(){
  //  expect(greet.testNumber).to.eql(0)
  //})
});
