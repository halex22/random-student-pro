export function studentCard(studentInfo) {
  const studentAge = new Date().getFullYear() - studentInfo.yob
  return `
  <div class="student-card">
    <h3>${studentInfo.name}</h3>
    <div>
      <span>${studentAge}</span>
      <span>${studentInfo.gender}</span>
      <span>${studentInfo.nationality}</span>
    </div>
  </div>
  
  `;
}
