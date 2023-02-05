const students: StudentManager = {};

// Calculate the student's current average
// Incomplete
function calculateAverage(weights: CourseGrades): number {
  return 0.0;
}

// Add a student to the model
// Incomplete
function addStudent(newStudentData: NewStudentRequest): boolean {
  // Destructure the name and weights
  const { name, weights } = newStudentData;

  // the name is already in 'students'
  if (name in students) {
    return false;
  }

  // Create a 'Student' object
  const newStudent: Student = newStudentData;

  // Add the new Student to the 'students' object, the student's name is the key
  students[newStudent] = newStudentData;

  return true;
}

function getStudent(studentName: string): Student | undefined {
  // If customer is not there
  if (!(studentName in students)) {
    return undefined;
  }

  return students[studentName];
}

// Export functions
export { students, addStudent, getStudent };
