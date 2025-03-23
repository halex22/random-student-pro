import { coupleComponent } from "../components/couple-component";
import studentService from "../services/student-service";
import { BasePage } from "./base";

export class HomePage extends BasePage {

  render() {
    this.rootDiv.innerHTML = ''
    const couples = this.studentService.generateCouples()
    couples.forEach(couple => console.log(couple))
    // couples.forEach(couple => this.rootDiv += coupleComponent(couple))
    this.rootDiv.appendChild(coupleComponent(couples[0]))
  }
}