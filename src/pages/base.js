import studentService from "../services/student-service";
import storageService from "../services/storage-service";


export class BasePage {
  studentService = studentService
  storageService = storageService
  rootDiv = document.getElementById('app')
}
