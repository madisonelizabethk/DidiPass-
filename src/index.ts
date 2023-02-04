import express, { Express } from 'express';

const app: Express = express();
const PORT = 8080;
function handleListen() {
  console.log(console.log(`Server listening on http://localhost:${PORT}`));
}

app.listen(PORT, handleListen);
