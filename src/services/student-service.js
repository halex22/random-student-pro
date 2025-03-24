import storageService from "./storage-service";

/**
 * @typedef {Object} Student
 * @property {string} name
 * @property {string} surname
 * @property {number} yob
 * @property {string} nationality
 * @property {"m"|"f"} gender
 * @property {number[]} marks
 */

class StudentService {

  static instance;
  lockedCouples = []
  /** @type {Student[]} */
  students = [];

  constructor() {
    if (StudentService.instance) return StudentService.instance;
    StudentService.instance = this;
  }

  fetchData() {
    console.info('getting data from server')
    return fetch("./assets/students.json")
      .then((res) => res.json())
      .then((data) => data.map( (student, index) => {student.id = index; return student}));
  }

  lockCouple(students) {}

  generateCouples() {
    const couples = [...this.lockedCouples]
    const availableStudents = this.students.filter(student => !couples.includes(student))
    
    let newCouple = []
    while (availableStudents.length) {
      const randomIndex = Math.floor(Math.random() * availableStudents.length)
      const pickedStudent = availableStudents.splice(randomIndex, 1)[0]
      newCouple.push(pickedStudent)

      if (newCouple.length === 2) {
        couples.push(newCouple)
        newCouple = []
      }

    }
    return couples


  }

  removeStudent(studentToReplace) {
    // this.students.filter(student => student !== studentToReplace)
  }

  addStudent(studentToAdd) {
    this.students.push(studentToAdd)
  }

  editStudent(oldStudentInfo, newStudentInfo) {
    newStudentInfo.id = oldStudentInfo.id
    console.log('modifying', oldStudentInfo)


    this.students.forEach(student => console.log(oldStudentInfo.id === student.id))
    
    
    this.students = this.students.filter(student => student.id !== oldStudentInfo.id)
    this.students.push(newStudentInfo)
  }


}

const studentService = new StudentService();
const savedData = storageService.loadData();
if (savedData?.length) {
  studentService.students = savedData;
} else {
  studentService.students = await studentService.fetchData();
  console.log(studentService.students)
  storageService.saveData(studentService.students)
}

export default studentService;
