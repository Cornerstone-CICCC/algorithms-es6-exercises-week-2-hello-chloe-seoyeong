/*
In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/

//forEach

const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let longest;
  instructors.forEach(instructor => {
    if (longest == undefined || Object.keys(instructor.name).length > Object.keys(longest.name).length) {
      longest = instructor;
    } 
  });

  return longest;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "Mobile" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); //{name: "Jeremiah", course: "Web"}

console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "Mobile" },
    { name: "Domascus", course: "Web" },
  ])
); //{name: "Domascus", course: "Web"}

module.exports = instructorWithLongestName;
