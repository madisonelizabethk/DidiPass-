import { Request, Response } from 'express';
import { students, addStudent, NewStudentRequest, getStudent } from '../models/StudentModel';

function getAllStudents(req: Request, res: Response): void {
  res.json(students);
}

function createNewStudent(req: Request, res: Response): void {
  console.log('\nPOST /api/students');
  console.log(req.body);

  // Echo the request body back to the client
  res.json(req.body);
  const studentData = NewStudentRequest(req.body);
  const didAddStudent = addStudent(studentData);

  if (studentData !== didAddStudent) {
    res.sendStatus(409); // 409 means conflict
  }

  res.sendStatus(201); // 201 means created
}

// Get student by name
function getStudentByName(req: Request, res: Response): void {
  const { studentName } = req.params as StudentNameParams;
  const student = getStudent(studentName);
  if (!student) {
    res.sendStatus(404); // means not found
    return;
  }
  // Student did not exist
  res.json(student);
}
export { getAllStudents, createNewStudent, getStudentByName };
