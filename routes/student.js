import {Router} from 'express';
import { getStudentList } from '../controllers/students.js';
const studentRouter = new Router();

studentRouter.get('/', getStudentList);
studentRouter.get('/', createStudent);

export default studentRouter;