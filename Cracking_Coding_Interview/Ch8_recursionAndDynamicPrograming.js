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

console.log(tripleSteps(1)); 
console.log(tripleSteps(5));
console.log(tripleSteps(10));