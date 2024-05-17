

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

    if (CourseInfo.id != AssignmentGroup.course_id) {
      throw new Error("Whoa, partner! The Course IDs don't match!");
  }
console.log("You're good, bro, the Course IDs match.");

//I used != instead of !==, because it technically doesn't matter if the course ID is accidentally put in as a string instead of a integer, as long as the characters match


//I want to make a new array to filter-out any assignments that aren't yet due
const currentDate = new Date("2024-05-16");

const currentAssignmentGroup = AssignmentGroup.assignments.filter(function(assignment) {
  const dueDate = new Date(assignment.due_at);
  return dueDate <= currentDate;
});

console.log(currentAssignmentGroup);








//






//start at the ending, the required function
// function getLearnerData(courseinfo,assgrp,[learnerSub])