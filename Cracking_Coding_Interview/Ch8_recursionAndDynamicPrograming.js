// 8.1 Triple Step: 
// A child is running up a staircase with n steps and can 
// hope either 1, 2 or 3 steps at a time. Implement a method
// to count how many possible ways the child can run up the stairs

// Time Complexity:
// Space Complexity:

const tripleSteps = steps => {
  if(steps === 0){
    return 1; 
  } else if(steps < 0){
    return 0; 
  } else {
    return tripleSteps(steps - 1) + tripleSteps(steps - 2) + tripleSteps(steps - 3); 
  }
}

// console.log(tripleSteps(1)); 
// console.log(tripleSteps(5));
// console.log(tripleSteps(10));

// 8.2 Robot in Grid
// Imagine a robot sitting on the upper left connor of grid with r rows and c column
// The robot can only move in two direction, right and down, but certain cells are 
// "off the limits" and the robot can not step on them. 
// Design a algorithm to find a path for the robot from top left to buttom right

// Note: the implementation assume the grid is r x c matrix
// each cell contain 1 or 0, where 0 represent "off the limit" cells

// Assume the start and end cells are always "1"
const robotInGrid = grid => {
  let path = [];
  const row = grid.length - 1; 
  const col = grid[0].length - 1; 
  
  function robotMove(rowIndex, colIndex){
    if(rowIndex > row || colIndex > col || grid[rowIndex][colIndex] === 0){
      return false; 
    }
    path.push([rowIndex, colIndex]);
    if(rowIndex === row && colIndex === col){
      return true; 
    } else { 
      if(robotMove(rowIndex + 1, colIndex) || robotMove(rowIndex, colIndex + 1)){
        return true;
      } else {
        path.pop();
        return false; 
      }
    }
  }

  robotMove(0, 0);
  console.log(path);
  return (path.length === row + col + 1) ? path : "No viable path found"; 
} 
// var grid = [[1, 1, 0], [1, 0, 0], [1, 0, 1]];
// console.log(robotInGrid(grid));