/// this is to store the already worked code

// this is the function that does the calculation

// this does the adding and dividing
function addAll(a, b, c, d) {
  return (a + b) / (c + d);
}

/// this  is the console log that prints out the ave calculation for reference
console.log(
  addAll(
    LearnerSubmissions[0].submission.score,
    assignmentGroup.assignments[1].points_possible,
    LearnerSubmissions[1].submission.score,
    assignmentGroup.assignments[0].points_possible
  )
);

// ============ first student ==========
// first student average variable
const firstStudent = addAll(
  LearnerSubmissions[0].submission.score,
  assignmentGroup.assignments[1].points_possible,
  LearnerSubmissions[1].submission.score,
  assignmentGroup.assignments[0].points_possible
);

console.log(firstStudent);

// =================== second student ============

// Second student average variable .. Note I changed possible_points last index[2] to 125 from 500 because 125 wasn't listed
const secondStudent = addAll(
  LearnerSubmissions[3].submission.score,
  assignmentGroup.assignments[2].points_possible,
  LearnerSubmissions[1].submission.score,
  assignmentGroup.assignments[0].points_possible
);

console.log(secondStudent);

// Now create another function that does the other calculation for both students
