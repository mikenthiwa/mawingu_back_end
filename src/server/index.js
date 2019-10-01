import http from 'http';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const server = http.createServer(app());
const port = process.env.PORT;
server.listen(port, () => console.log(`${port} is running`));
