import create from "zustand";

export const useProjectsStore = create((set) => ({
  projects: [],
  setProjects: (projects) => {
    return set((state) => ({ projects: projects }));
  },
  addProject: (project) => {
    return set((state) => ({ projects: [...state.projects, project] }));
  },
  removeProject: (code) => {
    return set((state) => ({
      projects: [...state.projects.filter((el) => el.id !== code)],
    }));
  },
  updateProject: (details) => {
    return set((state) => {
      const projects = state.projects;
      for (let i = 0, n = projects.length; i < n; i++) {
        let el = projects[i];
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
