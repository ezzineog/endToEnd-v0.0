const persistInBrowser = {
    get: (name) => localStorage.getItem(name),
    store: (name, data) => localStorage.setItem(name, data),
    store: (name, data) => localStorage.setItem(name, JSON.stringify(data)),
    remove: (name) => localStorage.removeItem(name),
    clear: () => localStorage.clear()

}
export default persistInBrowser;