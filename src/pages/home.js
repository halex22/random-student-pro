import { coupleComponent } from "../components/couple-component";
import studentService from "../services/student-service";
import { BasePage } from "./base";

export class HomePage extends BasePage {

  render() {
    this.rootDiv.innerHTML = ''
    const couples = this.studentService.generateCouples()
    couples.forEach(couple => this.rootDiv.appendChild(coupleComponent(couple)))
  }
}