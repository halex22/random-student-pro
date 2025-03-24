import { BasePage } from "./base";
import { formComponent } from "../components/form-component";
import storageService from "../services/storage-service";


export default class EditStudentPage extends BasePage {
  render() {
    this.rootDiv.innerHTML = ''
    const studentToEdit = JSON.parse(storageService.loadStudentToEdit())
    this.rootDiv.appendChild(formComponent(studentToEdit))
  }
}

