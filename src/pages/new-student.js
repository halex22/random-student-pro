import { formComponent } from "../components/form-component"
import { BasePage } from "./base"

export class NewStudentPage extends BasePage {

  render() {
    this.rootDiv.innerHTML = formComponent()
  }
}