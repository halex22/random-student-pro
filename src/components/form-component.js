import { inputComponent } from "./input-component"
import storageService from "../services/storage-service"
import studentService from "../services/student-service"
import { renderEditForm } from "../main"

export function formComponent (studentInfo){
  const age = new Date().getFullYear() - studentInfo?.yob 

  const wrapperDiv = document.createElement('div')
  wrapperDiv.id = 'form-wrapper'

  const form = document.createElement('form')
  form.id = "my-form"
  form.classList.add('student-form')

  form.innerHTML = 
  `
  
    <div class="base-student-info">

      ${inputComponent('name', studentInfo?.name ?? '')}

      ${inputComponent('surname', studentInfo?.surname ?? '')}
    </div>
      
    ${inputComponent('yob', studentInfo?.yob ?? 2000 , 'number')}

    ${inputComponent('nationality', studentInfo?.nationality ?? '')}


    <div class="input-container">
      <label for="gender">Gender</label>
      <select name="gender" id="">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="btn-container">
      <button class="save-btn">Save</button>
    </div>
  `

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(event.target)    

    const newInfo = {
      name: data.get('name'),
      surname: data.get('surname'),
      yob: Number(data.get('yob')),
      nationality: data.get('nationality'),
      gender: data.get('gender'),
    }
    
    // console.log('trying to save', newInfo)
    studentService.editStudent(studentInfo, newInfo)
    storageService.saveStudentToEdit(newInfo)
    alert('student was saved')
    renderEditForm()
  })


  wrapperDiv.appendChild(form)

  return wrapperDiv
} 
  

