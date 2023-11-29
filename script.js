// created a function that calculates all point_possible average

function calAverage(a, b, c) {
  // Number to convert a string into a number
  const averageNum = Number(a + b + c) / 3;
  return averageNum;
}

const courseInfo = {
  id: 451,
  name: "introduction to JavaScript",
};

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

console.log(calAverage(9, 4, 10));

// creating a function to call the id of the learner
