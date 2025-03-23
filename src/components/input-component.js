export function inputComponent(label, value, type= "text") {
  return `
  <div class="input-container">
    <label for="${label}" class="input-label">${label}</label>
    <input type=${type} name="${label}" id="${label}" required value="${value}">
  </div>
  `;
}
