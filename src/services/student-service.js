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
      .then((data) => data);
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


}

const studentService = new StudentService();
const savedData = storageService.loadData();
if (!!savedData.length) {
  studentService.students = savedData;
} else {
  studentService.students = await studentService.fetchData();
  storageService.saveData(studentService.students)
}

export default studentService;
