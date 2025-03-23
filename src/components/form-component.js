import { inputComponent } from "./input-component"

export function formComponent (studentInfo){
  return `
  <div id="form-wrapper">
  <form action="" class="student-form">
    <div class="base-student-info">

      ${inputComponent('name', studentInfo?.name ?? '')}

      ${inputComponent('surname', studentInfo?.surname ?? '')}
    </div>
      
    ${inputComponent('age', studentInfo?.age ?? 18, 'number')}

    ${inputComponent('nationality', studentInfo?.surname ?? '')}


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
  </form>
</div>
  
  `
} 