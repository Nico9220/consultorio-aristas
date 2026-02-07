import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    activeSection: "inicio",
    isScrolled: false,
  }),
  actions: {
    setActiveSection(id: string) {
      this.activeSection = id;
    },
    setScrolled(v: boolean) {
      this.isScrolled = v;
    },
  },
});
