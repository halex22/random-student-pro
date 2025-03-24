import { inputComponent } from "./input-component"
import storageService from "../services/storage-service"

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
      
    ${inputComponent('age', age ?? 18, 'number')}

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
    console.log('trying to save')
  })
  wrapperDiv.appendChild(form)

  return wrapperDiv
} 
  

