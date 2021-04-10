import 'mocha';
import {expect} from 'chai';
import {add, substract} from '../src/basicFunctions';

describe('add function tests', () => {
  it('add(1, 8) returns value 9', () => {
    expect(add(1, 8)).to.be.equal(9);
  });

  it('add(-1, 8) returns value 7', () => {
    expect(add(-1, 8)).to.be.equal(7);
  });

  it('add(1.2, 3.5) returns value 4.7', () => {
    expect(add(1.2, 3.5)).to.be.approximately(4.7, 0.000000000001);
  });
});

describe('substract function tests', () => {
  it('substract(7, 1) returns value 6', () => {
    expect(substract(7, 1)).to.be.equal(6);
  });

  it('substract(6.7, 3.1) returns value 3.6', () => {
    expect(substract(6.7, 3.1)).to.be.approximately(3.6, 0.000000000001);
  });

  it('substract(5, 7) returns value -2', () => {
    expect(substract(5, 7)).to.be.equal(-2);
  });
  it('substract(6.7, 9.8) returns value -3.1', () => {
    expect(substract(6.7, 9.8)).to.be.approximately(-3.1, 0.000000000001);
  });
});
