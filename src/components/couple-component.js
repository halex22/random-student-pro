import { studentCard } from "./student-card";

export function coupleComponent(coupleInfo) {


  const coupleContainer = document.createElement('div')
  coupleContainer.classList.add('couple-container')

  coupleContainer.appendChild(status()) 
  const container = document.createElement('div')
  container.classList.add('members')

  coupleInfo.forEach(member => {
    container.appendChild(studentCard(member)) 
  });
  coupleContainer.appendChild(container)

  return coupleContainer
} 


function status (){
  const div = document.createElement('div')
  div.classList.add('couple-status')
  div.innerHTML = '<p>couple status</p> '
  return div
}