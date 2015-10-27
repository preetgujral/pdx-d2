var expect = require('chai').expect;
var greet = require('./greet.js')
var str = 'some string'

//this is mocha
describe('access string', function(){
  // it('should return a string', function(done){

  //   //this is chai
  //   expect(str).to.be.a('string');
  //   expect(str).to.eql('some string');
  //   // done();
  // });
  // it('should equal some string', function(done) {
  //   expect(str.to)
  // }
  it('should return a greeting', function(){
    expect(greet.sayName('Preet')).to.eql("hello, I am Preet");
  });
  it('should be a number', function(){
    expect(greet.testNumber).to.eql(0)
  })
});
