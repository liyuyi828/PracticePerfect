// Source: unknown

// A person can go up a stair with 1, 2 or 3 step at a time
// Write a funtion to return how many possible ways a person can go up a stair with n stpes?

// For example: stairStep(3); //return 4
// because: possible combination (1, 1, 1), (2, 1), (1, 2), (3)

// ** You can assume the input will always be a positive integer

const stairStep = (steps) => {
  //You solution here:  
  function combination(remain){
    if(remain < 0 ){
      return 0; 
    } else if (remain === 0) {
      return 1; 
    } else {
      return combination(remain - 1) + combination(remain - 2) + combination(remain - 3); 
    }
  }
  return (steps > 0) ? combination(steps) : 0; 
}

module.exports = { stairStep }; 

