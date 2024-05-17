//SBA - 308 - JAVASCRIPT FUNDAMENTALS

//part of the original data we were given
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
//adding more of the original data we were given

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


//first console.log just to make some space in my terminal

console.log('');

//verify that course IDs match with if/else statement

    if (CourseInfo.id != AssignmentGroup.course_id) {
      throw new Error("Whoa, partner! The Course IDs don't match!");
  }
console.log("You're good, bro, the Course IDs match.");

//just for space in my terminal
console.log('');
//I used != instead of !==, because it technically doesn't matter if the course ID is accidentally put in as a string instead of a integer, as long as the characters match


//I want to make a new array to filter-out any assignments that aren't yet due
const currentDate = new Date("2024-05-16");

const currentAssignmentGroup = AssignmentGroup.assignments.filter(function(assignment) {
  const dueDate = new Date(assignment.due_at);
  return dueDate <= currentDate;
});

console.log("The Current Assignment Group Array",currentAssignmentGroup);

//just for space
console.log('');


//here I'm trying to filter assignments by learner_ID and I'm using the currentAssignmentGroup array from before, so the future assignment has already been filtered out

function submittedAssignments(learnerId) {
  const learnerAssignments = [];
  for (const assignment of currentAssignmentGroup) {
    for (const submission of LearnerSubmissions) {
      if (submission.learner_id === learnerId && submission.assignment_id === assignment.id) {
        learnerAssignments.push({
          ...assignment,
          submission: submission.submission
        });
        break;
      }
    }
    if (!learnerAssignments.find(a => a.id === assignment.id)) {
      learnerAssignments.push({
        ...assignment,
        submission: null
      });
    }
  }
  return learnerAssignments;
}

//here I'm trying to pull the assignments for each learner ID, respectively

const learner125Assignments = submittedAssignments(125);
console.log("Assignments for learner_id: 125", learner125Assignments);

const learner132Assignments = submittedAssignments(132);
console.log("Assignments for learner_id: 132", learner132Assignments);



//here I'm trying to 




//start at the ending, the required function
// function getLearnerData(courseinfo,assgrp,[learnerSub])