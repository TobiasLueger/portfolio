import { create } from 'zustand';

type LanguageStore = {
  language: string;
  setLanguage: (lang: string) => void;
  getLanguage: () => void;
};

const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
  getLanguage: () => set((state: any) => state.language),
}));

export default useLanguageStore;