import './style.css'
import { NewStudentPage } from './pages/new-student'
import { HomePage } from './pages/home'

const newStudentPage = new NewStudentPage()
const homePage = new HomePage()

const studentBtn = document.getElementById('show-students')
const addStudent = document.getElementById('new-student')

studentBtn.addEventListener('click', () => homePage.render())
addStudent.addEventListener('click', () => newStudentPage.render())


homePage.render()


