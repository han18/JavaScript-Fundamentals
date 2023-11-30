// this is to work easily on the code

// an object of the course
const courseInfo = {
  id: 451,
  name: "introduction to JavaScript",
};

// function to retrieve info from the courseInFo
const callCourse = function () {
  for (const c in courseInfo) {
    return `${c}: ${courseInfo[c]}`;
  }
};
console.log(callCourse());

/////======================
console.log("=========================");

// an object of the assignment course and an [array] of assignment info
const assignmentGroup = {
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

// console.log(LearnerSubmissions[4].submission.score);

// now looping into an array to get some data

// for (let i = 0; i < LearnerSubmissions.length; i++) {
//   console.log(
//     LearnerSubmissions[i].learner_id,
//     LearnerSubmissions[i].assignment_id,
//     LearnerSubmissions[i].submission.score
//   );
// }

// function CourseInfo() {
//   for (let i = 0; i < LearnerSubmissions.length; i++) {
//     console.log(LearnerSubmissions[i].learner_id);
//   }
// }

// CourseInfo();

function callID() {
  // creating a (for of loop) to retrieve the id since it's an array of objects
  for (const d of LearnerSubmissions) {
    return `${LearnerSubmissions[0].learner_id}`;
  }
}

console.log(callID());

// a for of loop to get the other learner's ID
function callID2() {
  for (const d2 of LearnerSubmissions) {
    return `${LearnerSubmissions[3].learner_id}`;
  }
}

console.log(callID2());

// getting the students average

function averageCount(learn1, learn2) {
  for (let i = 0; i < LearnerSubmissions.length; i++) {
    let learn1 = LearnerSubmissions[i].submission.score;
    return learn1;
  }
  for (let z = 0; z < LearnerSubmissions.length; z++) {
    let learn2 = LearnerSubmissions[i][1].submission.score;
    return learn2;
  }
}

console.log(averageCount());
console.log(averageCount(LearnerSubmissions[1].submission.score));

console.log(LearnerSubmissions[0].submission.score);
console.log(LearnerSubmissions[1].submission.score);

const addThem =
  LearnerSubmissions[0].submission.score +
  LearnerSubmissions[1].submission.score;

console.log(addThem);

let addThem2 =
  LearnerSubmissions[0].submission.score +
  assignmentGroup.assignments[0].points_possible;
console.log(addThem2);
///////////////// creating only functions
// this does the adding and dividing
function addAll(a, b, c, d) {
  return (a + b) / (c + d);
}

// just logging the results
console.log(
  addAll(
    LearnerSubmissions[0].submission.score,
    assignmentGroup.assignments[1].points_possible,
    LearnerSubmissions[1].submission.score,
    assignmentGroup.assignments[0].points_possible
  )
);

// we could put the function addAll in its own variable for the first student so that I could have less storage

// first student average variable
const firstStudent = addAll(
  LearnerSubmissions[0].submission.score,
  assignmentGroup.assignments[1].points_possible,
  LearnerSubmissions[1].submission.score,
  assignmentGroup.assignments[0].points_possible
);

console.log(firstStudent);

// Second student average variable .. Note I changed possible_points last index[2] to 125 from 500 because 125 wasn't listed
const secondStudent = addAll(
  LearnerSubmissions[3].submission.score,
  assignmentGroup.assignments[2].points_possible,
  LearnerSubmissions[1].submission.score,
  assignmentGroup.assignments[0].points_possible
);

console.log(secondStudent);
