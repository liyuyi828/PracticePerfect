//Source: HackerRanks

// This is a longer challenge

// input: a laser maze represent by m x n string (separate by "\n"), contains:
// @: the source of laser, always go east; 
// >v<^: prisms, facing east, south, west, north, respectively
// \/O: mirrors, facing 45 degree northEast, 45 dgree southEast, and circular, respectively
// - (hypen): empty block  

// (1) there is only one "@" in the maze, and always shoot laser to east (--->)

// (2) when laser hit a prism, it will always go to the direction the facing:
// ">" east, "<" west, "^" north,  |
//  (-->)  ,  (-->)  ,  |       , "v" south

// (3) when laser hit a mirror, it will reflect:
// "\", east to south, north to west, south to east, west to north;
// "/", east to north, north to east, south to west, west to south;
// "O", oppsite direction, ie, east <--> west, south <--> north;

// (4) it will past thru "-" or "@"


// Write a function, to find the out how much distant the laser travel before hitting a wall
// If there is a loop, return "-1"  

//For example: 
// laserMaze("@--\n---\n---"); // return 3
// laserMaze("@-v\n---\n--<"); // return 7
// laserMaze("@-v\n---\nO-<"); // return -1


//Challenge: (1) try to return a loop as soon as it happen; 
//           (2) practive Object oriented design, try not to write repetitive codes

const laserMaze = (str) => {
  //You solution here:

}

module.exports = { laserMaze };