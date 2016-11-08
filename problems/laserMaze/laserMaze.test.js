const laserMaze = require('./laserMaze.js').laserMaze;
const assert = require ('chai').assert;

describe('laserMaze', () => {

  it('should return a number', () => {
    assert.equal(typeof laserMaze('aba'), 'string');
  });

  it('should return correct length of laser path, including large inputs', () => {
    assert.equal(laserMaze('racecar'), 'racecar');
  });

  it('should return -1 for different kind of loops', () => {
    assert.equal(laserMaze('racecarbmw'), 'racecar');
  });

});