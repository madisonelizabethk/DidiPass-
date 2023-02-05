import express, { Express } from 'express';
import { getAllStudents, createNewStudent, getStudent } from './controllers/StudentController';

const app: Express = express();
const PORT = 8080;

// Enable JSON Request body parsing
app.use(express.json());

// Endpoint to get students
app.get('/api/students', getAllStudents);
// Endpoint to post students
app.post('/api/students', createNewStudent);
// Endpoint to get students by name (Get data)
app.get('/api/students/{studentName}', getStudent);

function handleListen(): void {
  console.log(console.log(`Server listening on http://localhost:${PORT}`));
}

app.listen(PORT, handleListen);
