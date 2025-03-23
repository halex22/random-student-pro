class StorageService {
  static #storageKey = "studentsData";
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
}

const storageService = new StorageService();
export default storageService;
