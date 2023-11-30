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
