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
// let grid = [[1, 1, 0, 0], 
//             [1, 1, 1, 1],
//             [1, 0, 0, 0], 
//             [1, 1, 0, 1]];
// console.log(robotInGrid(grid));

// 8.3 Magic Index
// A magic index in an array A[0, 1, ..., n - 1 ] is defined to be an index
// such that A[i] = i, given a sorted aray of distinct intergers,
// write a method to find a magic index, if one exist, in array A

const magicIndex = arr => {
  let current = 0;
  let len = arr.length; 
  while(current < len){
    if(arr[current] === current){
      return current; 
    } else if (arr[current] < current){
      current++; 
    } else {
      current = arr[current];
    }
  }
  return null; 
}

// let indexAtEnd = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 9]; 
// let indexAtMiddle = [-1, 0, 2, 6, 7];
// let noMagicIndex = [1, 2, 3, 4, 5];
// let indexAtEndDup = [-1, -1, -1, -1, -1, -1, -1, 7]; 
// let indexAtMiddleDup = [-1, -1, 0, 3];
// let noMagicIndexDup = [-1, -1, -1, -1, -1];
// console.log(magicIndex(indexAtEnd));
// console.log(magicIndex(indexAtMiddle));
// console.log(magicIndex(noMagicIndex));
// console.log(magicIndex(indexAtEndDup));
// console.log(magicIndex(indexAtMiddleDup));
// console.log(magicIndex(noMagicIndexDup));

// Follow up, what if the values are not distinct? 


// 8.4 Power Set
// Write a method to return all subsets of a set; 

const powerSet = arr => {
  let result = [[]];
  let len = arr.length; 
  
  function builtSet(currentIndex){
    if(currentIndex >= len){
      return; 
    }
    let tempResult = [];
    let addCurrent; 
    result.forEach( e => {
      addCurrent = e.slice()
      addCurrent.push(arr[currentIndex]);
      tempResult.push(e); 
      tempResult.push(addCurrent);
    })
    result = tempResult;
    builtSet(currentIndex+1);
  }
  
  builtSet(0);
  return result;
}
// let set = [1, 2, 3];
// console.log(powerSet(set));

// 8.5 Recursive Multiply
// Write a recursive function to multiply two positive integers without using the * operator
// You can use addition, subtraction, and bit shifting, but you should minimize
// the number of those opeartions

const multiplyRe = (int1, int2) => {
  let result = 0; 
  function addRecursively(tracker){
    if(tracker <= 0){
      return; 
    }
    result += int2; 
    addRecursively(tracker - 1);
  }
  addRecursively(int1);
  return result; 
}

console.log(multiplyRe(9, 8));