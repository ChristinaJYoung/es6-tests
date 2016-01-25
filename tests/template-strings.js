var expect = require('chai').expect;

describe('template strings', function() {

  it('it should be a string', function() {
    var string = 'abc'

    expect(string).to.be.a('string');
  });
  it('can evaluate variables', function() {
    var bar = 'baz';

    var string = `foo${bar}`;

    expect(string).to.equal('foobaz');
  });
  it('can execute functions', function() {
    var string = `The date is: ${new Date()}`;
    var date = new Date();
    expect(string).to.equal('The date is: ' + date);
  });
  it('can evaluate expressions', function () {
    var expression = `${1+2}`;
    expect(expression).to.equal('3');
  });
  it('can handle multiline strings', function () {
    var string = `hello
                  world`;
    expect(string).to.equal('hello\n                  world');
  });

});
