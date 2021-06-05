class Service {
  constructor() {
    this.url = "http://localhost:3001";
    this.opts = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
  }

  getOptions(opts) {
    return {
      ...opts,
      ...this.opts,
    };
  }

  get(path, opts) {
    const options = this.getOptions(opts);
    const url = `${this.url}${path}`;

    return fetch(url, options);
  }

  post(path, payload, opts) {
    const options = this.getOptions(opts);
    const url = `${this.url}${path}`;

    return fetch(url, { ...options, body: JSON.stringify(payload) });
  }

  put(path, payload, opts) {
    const options = this.getOptions(opts);
    const url = `${this.url}${path}`;

    return fetch(url, { ...options, body: JSON.stringify(payload) });
  }

  update(path, payload, opts) {
    const options = this.getOptions(opts);
    const url = `${this.url}${path}`;

    return fetch(url, { ...options, body: JSON.stringify(payload) });
  }

  delete(path, opts) {
    const options = this.getOptions(opts);
    const url = `${this.url}${path}`;

    return fetch(url, options);
  }
}

// Global service instance
export const client = new Service();
