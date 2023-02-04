// Adding a student to the model
// Function to calculate the student's current average (weighted average)
function calculateAverage(weights: CourseGrades): number {

}

function addStudent(newStudentData: NewStudentRequest): boolean {
  // Destructure the name and weights
  const {name, weights } = newStudentData;

  // the name is already in 'students'
    // then return false

  // Calculate the student's current average (use average function)

  const newStudent: Student =  // Create a 'Student object using the 'name', 'weights' and 'currentAverage'

  // Add the new Student to the 'students' object. The student's name is the key

  // Return true since the student was added
}

// Get a student's information with their name
function getStudent(studentName: string): Student | undefined {
  // If the student's name is not in 'students'
  if studentName !==
    // then return undefined

    // Return the student's information (their name is the key for 'students'

};

// Export functions
export {students, addStudent, getStudent };
