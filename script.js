function calAverage(a, b, c) {
  // Number to convert a string into a number
  const averageNum = Number(a + b + c) / 3;
  return averageNum;
}

// an object of the course
const courseInfo = {
  id: 451,
  name: "introduction to JavaScript",
};

// an object of the assignment and an array of assignment info
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignmentsInfo: [
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
      points_possible: 500,
    },
  ],
};

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

//=======================
console.log(calAverage(9, 4, 10));

// creating a function to call the id of the learner

// function to retrieve info from the courseInFo
const callCourse = function () {
  for (const c in courseInfo) {
    return `${c}: ${courseInfo[c]}`;
  }
};
console.log(callCourse());

// put the courseID into a variable
const course = callCourse();
console.log(course);

// ===================================

// const assignPoints = LearnerSubmissions.forEach((LearnerSubmissions) => {});

const a = LearnerSubmissions[0].submission.score;
const b = LearnerSubmissions[1].submission.score;
const add = a + b;
console.log(add);

const w =
  assignmentGroup.assignmentsInfo[1].points_possible +
  assignmentGroup.assignmentsInfo[2].points_possible;

// const t = assignmentGroup.assignmentsInfo[2].points_possible;

console.log(w);
// console.log(t);

//======================================
// creating a function to call any learner id giving
function callLearner() {
  //   const learnCall = ""; see it I need a variable to store the id
  //   const learnCall = LearnerSubmissions[0].learner_id;
  // using the for of loop since it's object array structured
  for (const l in LearnerSubmissions[0].submission.score) {
    return LearnerSubmissions[l];
  }
}

console.log(callLearner());

// new one for submission

// creating an object to hold the user's data
const learnerData = {};

// iterate through the submissions

// using a forEach method
LearnerSubmissions.forEach(function (LearnerSubmissions) {
  console.log(LearnerSubmissions);
});
