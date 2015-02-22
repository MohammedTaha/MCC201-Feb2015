/**
 * Created by MTA on 2/22/2015.
 */



var students = require("./StudentModule");

function Classes(standard, students){
    this.standard = standard;
    this.students = students;
    console.log("Class " + this.standard + " have " + this.students.length + " Students");
}

new Classes(9, students.getStudents(3));
new Classes(7, students.getStudents(10));