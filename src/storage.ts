class Store {
  constructor(public key: string) {}

  getValue(): string | null {
    return localStorage.getItem(this.key)
  }

  setValue(value: string) {
    localStorage.setItem(this.key, value)
  }

  getJson<T>(): T | null {
    const value = this.getValue()
    return value ? JSON.parse(value) : null
  }

  setJson(value: any) {
    this.setValue(JSON.stringify(value))
  }

  remove() {
    localStorage.removeItem(this.key)
  }
}

export function cleanStorage() {
  Object.values(storage).forEach((store) => store.remove())
}

export const storage = {
  lastEpisode: new Store('lastEpisode'),
  episodes: new Store('episodes'),
}
