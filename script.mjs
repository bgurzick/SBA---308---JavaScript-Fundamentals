

const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};


  //verify that course IDs match with if/else statement
function doTheyMatch(){
    if (CourseInfo.id === AssignmentGroup.course_id) {
      console.log("Yeah, bro, IDs match.");
  } else {
        console.log("Whoa, partner, IDs don't match.");
  }
}
doTheyMatch()








//start at the ending, the required function
// function getLearnerData(courseinfo,assgrp,[learnerSub])