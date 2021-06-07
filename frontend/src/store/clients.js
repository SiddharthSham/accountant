import create from "zustand";

export const useClientStore = create((set) => ({
  clients: [],
  setClients: (clients) => {
    return set((state) => ({ clients: clients }));
  },
  addClient: (client) => {
    return set((state) => ({ clients: [...state.clients, client] }));
  },
  removeClient: (code) => {
    return set((state) => ({
      clients: [...state.clients.filter((el) => el.id !== code)],
    }));
  },
  updateClient: (details) => {
    return set((state) => {
      const clients = state.clients;
      for (let i = 0, n = clients.length; i < n; i++) {
        let el = clients[i];
        if (el.id === details.id) {
          el = {
            ...el,
            ...details,
          };
          break;
        }
      }
    });
  },
}));
