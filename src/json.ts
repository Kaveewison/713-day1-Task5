interface Student {
    firstName: string;
    lastName: string;
    age: number;
    gpa: number;
}

function processStudentObject(student: Student): string {
    if (student.gpa > 2) {

        return JSON.stringify(student);
    } else {
        return `คุณ ${student.firstName} พ้นสภาพ`;
    }
}

const student1: Student = { firstName: 'Nuttawut', lastName: 'Yajai', age: 20, gpa: 3.5 };
const student2: Student = { firstName: 'Watanya', lastName: 'Nawan', age: 21, gpa: 1.9 };

console.log(processStudentObject(student1));

console.log(processStudentObject(student2));
