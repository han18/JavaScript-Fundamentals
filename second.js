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
