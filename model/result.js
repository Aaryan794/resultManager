import mongoose from "mongoose";
import { Types } from "mongoose";

const resultSchema = mongoose.Schema({
exam :{
    type: schema.type.objectId,
    ref: "Exam",
    required: true,
},
marks:[{
    subject:{
        type: Schema.type.objectId,
        ref: 'Subject',
        required: true
    },
    marks:{
        type: Number,
        required: true,
        defaultValue: 0,
    },
    
}]
});

const Result = mongoose.model("Result", resultSchema);
export {Result, Result}