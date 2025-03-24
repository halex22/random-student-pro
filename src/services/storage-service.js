class StorageService {
  static #storageKey = "studentsData";
  static #editKey = 'toEdit'
  static instance;
  constructor() {
    if (StorageService.instance) return StorageService.instance;
    StorageService.instance = this;
  }

  saveData(dataToSave) {
    localStorage.setItem(StorageService.#storageKey, JSON.stringify(dataToSave))
  }

  loadData() {
    return JSON.parse(localStorage.getItem(StorageService.#storageKey));
  }

  saveStudentToEdit(student) {
    localStorage.setItem(StorageService.#editKey, JSON.stringify(student))
  }

  loadStudentToEdit() {
    return localStorage.getItem(StorageService.#editKey)
  }

}

const storageService = new StorageService();
export default storageService;
