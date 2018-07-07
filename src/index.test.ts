import * as mocha from 'mocha';
import * as chai from 'chai';
import { combineContainers } from './';

const expect = chai.expect;

describe('combine-containers', () => {
  it('should combine all containers' , () => {
    const addOne = (n: number) => n + 1;
    const addThree = (n: number) => n + 3;

    const initial = 5;
    const result = combineContainers([addOne, addThree])(5);

    expect(result).to.equal(9);
  });
});