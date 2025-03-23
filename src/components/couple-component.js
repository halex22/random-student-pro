import { studentCard } from "./student-card";

export function coupleComponent(coupleInfo) {

  console.log('build info for' , coupleInfo[0], coupleInfo[1])

  const coupleContainer = document.createElement('div')
  coupleContainer.classList.add('couple-container')

  coupleContainer.innerHTML += status()

  const container = document.createElement('div')
  container.classList.add('members')

  coupleInfo.forEach(member => {
    container.innerText += studentCard(member)
  });

  return container
} 


function status (){
  return `
  <div class="couple-status">
    <p>couple status</p>
  </div>
  `
}