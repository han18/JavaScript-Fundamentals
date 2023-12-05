// try/catch error
// if both ID'd are referenced
const idError = () => {
  try {
    if (CourseInfo.id === AssignmentGroup.id) {
      console.log(`Two different ID's ${CourseInfo.id} ${AssignmentGroup.id}`);
    } else {
      throw "Two different ID's with different reference place in an object array and in and array of objects";
    }
  } catch (err) {
    console.log(err);
  }
};

console.log(idError());

// an object of the course
const CourseInfo = {
  id: 451,
  name: "introduction to JavaScript",
};

// function to retrieve info from the courseInFo
const callCourse = function () {
  for (const c in CourseInfo) {
    return `${c}: ${CourseInfo.id}`;
  }
};
console.log(callCourse());

/////======================
console.log("=========================");

// an object of the assignment course and an [array] of assignment info
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
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 125,
    },
  ],
};

console.log("======================================");
// an array of objects
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

//========================= end of LearnerSubmission =========

// console.log(LearnerSubmissions[4].submission.score);

// now looping into an array to get some data.. this was a good catch
// for (let i = 0; i < LearnerSubmissions.length; i++) {
//   console.log(
//     LearnerSubmissions[i].learner_id,
//     LearnerSubmissions[i].assignment_id,
//     LearnerSubmissions[i].submission.score
//   );
// }

//=================== ID functions====================
// first learner's ID
function callID() {
  // creating a (for of loop) to retrieve the id since it's an array of objects
  for (const d of LearnerSubmissions) {
    return ` ID: ${LearnerSubmissions[0].learner_id}`;
  }
}

console.log(callID());

/// second Leaner's ID
// a (for of loop) to get the other learner's ID
function callID2() {
  for (const d2 of LearnerSubmissions) {
    return ` ID: ${LearnerSubmissions[3].learner_id}`;
  }
}

console.log(callID2());
console.log("======================================");

//================================== END ID Functions ==============

////================ Average Calculation Function ===========
// this does the adding and dividing
function addAll(a, b, c, d) {
  return (a + b) / (c + d);
}

// just logging the results directly from the function
console.log(
  addAll(
    LearnerSubmissions[0].submission.score,
    AssignmentGroup.assignments[1].points_possible,
    LearnerSubmissions[1].submission.score,
    AssignmentGroup.assignments[0].points_possible
  )
);

// we could put the function addAll in its own variable for the first student so that I could have easy access

// first student average variable
const firstStudent = addAll(
  LearnerSubmissions[0].submission.score,
  AssignmentGroup.assignments[1].points_possible,
  LearnerSubmissions[1].submission.score,
  AssignmentGroup.assignments[0].points_possible
);

console.log(firstStudent);

//================ second Student
// Second student average variable .. Note I changed possible_points last index[2] to 125 from 500 because 125 wasn't listed
const secondStudent = addAll(
  LearnerSubmissions[3].submission.score,
  AssignmentGroup.assignments[2].points_possible,
  LearnerSubmissions[1].submission.score,
  AssignmentGroup.assignments[0].points_possible
);

console.log(secondStudent);

// let uniqueID = [...new]

/// ============== Score - possible_points calculation =====
/// it's a function to divide two numbers ==========
function scorePoints(h, p) {
  return h / p;
}
// logged the function to check if it's working, and it is
console.log(scorePoints(10, 2));
/// =============================== END of this function

///ONE: first student division score/point_possible =========
// stored the results in an variable
const firstScore = scorePoints(
  LearnerSubmissions[0].submission.score,
  AssignmentGroup.assignments[0].points_possible
);
console.log(firstScore);

// TWO: using the same division function & doing the second division part score/point_possible
// stored the second calculation in a variable
const firstScore1 = scorePoints(
  LearnerSubmissions[1].submission.score,
  AssignmentGroup.assignments[1].points_possible
);

//======== END of first student's calculation ======

//========= Second student score and points division ====
// using the same division function scorePoinst()

// ONE: creating a variable to store the calculation of first part
const secondScore = scorePoints(
  LearnerSubmissions[3].submission.score,
  AssignmentGroup.assignments[0].points_possible
);
console.log(secondScore);

// Two: second part of the score / point_possible
// it needs it's own function because it's extra calculation for the late submission
const secondLateScore = function () {
  const count =
    (LearnerSubmissions[4].submission.score - 15) /
    AssignmentGroup.assignments[1].points_possible;
  return count;
};

console.log(secondLateScore());

// creating a function to hold and retrieve the data

function getLearnerData(course, avg, sub) {
  const allData = [
    {
      course: callID(),
      avg: firstStudent,
      sub: `1: ${firstScore}, 2: ${firstScore1}`,
    },
    {
      course: callID2(),
      avg: secondStudent,
      sub: `1: ${firstScore1}, 2: ${secondLateScore()}`,
    },
  ];
  return allData;
}

// logging the results
// console.log(getLearnerData(CourseInfo, AssignmentGroup, AssignmentGroup));

// storing the results in a variable
const dataReturn = getLearnerData(CourseInfo, AssignmentGroup, AssignmentGroup);

// logging the dataResults
console.log(dataReturn);
