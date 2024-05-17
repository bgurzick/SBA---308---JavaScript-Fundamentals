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

// SBA REQUIRED FUNCTION
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {


// trying to verify that the course IDs match
  if (CourseInfo.id !== AssignmentGroup.course_id) {
    throw new Error("Whoa, partner! The Course IDs don't match!");
  }
  console.log("You're good, bro, the Course IDs match.");

//trying to filter out assignments that aren't due yet
  const currentDate = new Date("2024-05-16");
  const currentAssignmentGroup = AssignmentGroup.assignments.filter(function(assignment) {
    const dueDate = new Date(assignment.due_at);
    return dueDate <= currentDate && assignment.id !== 3;
  });

  const result = [];

// trying to use forEach to iterate for the relevant ID properties; using FIND
LearnerSubmissions.forEach(submission => {
  const learnerID = submission.learner_id;
  const assignmentID = submission.assignment_id;
  const assignment = currentAssignmentGroup.find(Q => Q.id === assignmentID); 

// searching for assignments in the arrays and storing scores;
  if (assignment) {
    if (!result[learnerID]) {
      result[learnerID] = {
        id: learnerID,
        totalScore: 0,
        numberOfAssignments: 0,
        scores: {} 
      };
    }

// updating the learner data with scores and incrementing the number of assignments
    result[learnerID].totalScore += submission.submission.score;
    result[learnerID].scores[assignmentID] = submission.submission.score / assignment.points_possible;
    result[learnerID].numberOfAssignments++;
  }
});

// trying to calculate the average for each learnerID
for (const learnerID in result) {
  const learner = result[learnerID];
  let totalAvg = 0; 

  for (const assignmentID in learner.scores) {
    totalAvg += learner.scores[assignmentID];
  }
  totalAvg /= learner.numberOfAssignments;

//including the individual assignment scores in the result/output
  result[learnerID] = {
    id: learner.id,
    avg: totalAvg,
    ...learner.scores 
  };
}

return Object.values(result);

}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
