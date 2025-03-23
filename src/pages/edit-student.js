import { BasePage } from "./base";
import { formComponent } from "../components/form-component";
import storageService from "../services/storage-service";


export default class EditStudentPage extends BasePage {
  render() {
    const studentToEdit = JSON.parse(storageService.loadStudentToEdit())
    this.rootDiv.innerHTML = formComponent(studentToEdit)
  }
}