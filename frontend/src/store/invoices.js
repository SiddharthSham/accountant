import create from "zustand";

export const useInvoiceStore = create((set) => ({
  invoices: [],
  setInvoices: (invoices) => {
    return set((state) => ({ invoices: invoices }));
  },
  addInvoice: (invoice) => {
    return set((state) => ({ invoices: [...state.invoices, invoice] }));
  },
  removeInvoice: (code) => {
    return set((state) => ({
      invoices: [...state.invoices.filter((el) => el.id !== code)],
    }));
  },
  updateInvoice: (details) => {
    return set((state) => {
      const invoices = state.invoices;
      for (let i = 0, n = invoices.length; i < n; i++) {
        let el = invoices[i];
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
