import './style.css'
import { NewStudentPage } from './pages/new-student'
import { HomePage } from './pages/home'
import EditStudentPage from './pages/edit-student'

const newStudentPage = new NewStudentPage()
const homePage = new HomePage()
const editPage = new EditStudentPage()

const studentBtn = document.getElementById('show-students')
const addStudent = document.getElementById('new-student')

studentBtn.addEventListener('click', () => homePage.render())
addStudent.addEventListener('click', () => newStudentPage.render())

export function renderEditForm() {
  editPage.render()
}

homePage.render()


