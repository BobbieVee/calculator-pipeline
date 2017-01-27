const expect = require('chai').expect;
const Calculator = require('../calculator');
const pipeline = Calculator.pipeline;

describe('Calculator', () => {
  describe('pipeline', () => {
    it('exists', () => {
      expect(Calculator).to.be.ok;
    });
  });
}); 
 
describe('math pipeline', ()=> {
  describe('set 2 | add 3 | multiply 10', ()=> {
    it('returns 50', ()=> {
      var result = pipeline('set 2 | add 3 | multiply 10');
      expect(result).to.equal(50);
    });
  });
  describe('set 2 | add 3 | multiply 10 | negate', ()=> {
    it('returns -50', ()=> {
      var result = pipeline('set 2 | add 3 | multiply 10 | negate');
      expect(result).to.equal(-50);
    });
  });
  describe('set 2 | add 3 | multiply 10 | negate | divide 25 | negate', ()=> {
    it('returns 2', ()=> {
      var result = pipeline('set 2 | add 3 | multiply 10 | negate | divide 25 | negate');
      expect(result).to.equal(2);
    });
  });
});
