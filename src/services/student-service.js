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
  constructor() {
    if (StudentService.instance) return StudentService.instance;
    StudentService.instance = this;
    /** @type {Student[]} */
    this.students = [];
  }

  fetchData() {
    fetch("./assets/students.json")
      .then((res) => res.json())
      .then((data) => (this.students = data));
  }

  lockCouple(students) {}

  generateCouples() {
    const couples = [...this.lockedCouples]
    

  }

  extractCouple() {
    for (let i = 0; i < this.students; i++) {
      const element = array[i];
      
    }
  }


}

const studentService = new StudentService();
const savedData = storageService.loadData();
if (savedData) {
  studentService.students = savedData;
} else {
  studentService.fetchData();
  storageService.saveData(studentService.students)
}

export default studentService;
