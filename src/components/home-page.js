import studentService from "../services/student-service";

export default class HomeComponent {
  #studentService = studentService
  constructor() {}

  render() {
    const appDiv = document.getElementById('app')
  }
}