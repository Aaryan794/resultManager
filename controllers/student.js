import {Student} from '../model/student.js';
export async function getStudentList(req, res){
    const students = await Student.find();
    res.json(students);
}

export async function createStudent(req, res){
    const userData = req.body;
    const student = new Student(body);
    const createStudent = await student.save();
    res.json (createdStudent);
}