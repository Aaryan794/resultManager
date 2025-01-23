import mongoose from 'mongoose';

// Enum for semester values
const Semester = {
    I: 'i',
    II: 'ii',
    III: 'iii',
    IV: 'iv',
    V: 'v',
    VI: 'vi',
    VII: 'vii',
    VIII: 'viii',
    IX: 'ix',
    X: 'x',
};

// Define the schema
const studentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    rollNo: {
        type: Number,
        required: true,
        unique: true,
    },
    address: String,
    semester: {
        type: String,
        enum: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
        required: true,
    },
});

// Correct model definition using mongoose.model()
const Student = mongoose.model('Student', studentSchema);

export { Student };