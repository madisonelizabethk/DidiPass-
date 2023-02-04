type CourseGrades = {
  assignmentWeights: Array<CourseGrade>;
  finalExamWeight: number;
};
type CourseGrade = {
  name: string;
  weight: number;
  grade: number;
};

type Student = {
  name: string;
  weights: CourseGrade;
  currentAverage: number;
};

type NewStudentRequest = {
  name: string;
  weights: CourseGrade;
};

type AssignmentGrade = {
  grade: number;
};

type FinalGrade = {
  overallScore: number;
  letterGrade: string;
};

type FinalExamScores = {
  neededForA: number;
  neededForB: number;
  neededForC: number;
  neededForD: number;
};

// Making the Model
type StudentManager = {
  keys: string;
  values: Array<Student>;
};
