import storageService from "../services/storage-service"
import { renderEditForm } from "../main"


export function studentCard(studentInfo) {
  const studentAge = new Date().getFullYear() - studentInfo.yob
  const div = document.createElement('div')
  div.classList.add('student-card')
  const studentName = document.createElement('h3')
  studentName.innerText = studentInfo.name 

  const div2 = document.createElement('div')
  div2.appendChild(createSpan(studentAge))
  div2.appendChild(createSpan(studentInfo.gender))
  div2.appendChild(createSpan(studentInfo.nationality))

  const btn = document.createElement('button')
  btn.innerText = 'edit'
  btn.classList.add('edit-btn')
  btn.addEventListener('click', () => {
    storageService.saveStudentToEdit(studentInfo)
    renderEditForm()
  })

  div.append(studentName, div2, btn)

  return div;
}

function createSpan(txt) {
  const span = document.createElement('span')
  span.innerText = txt
  return span
}
