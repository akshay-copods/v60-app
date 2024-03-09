import { create } from 'zustand';

export const useAppStore = create((set) => ({
  bears: 0,
  isSignedIn: false,
  signIn: () => set({ isSignedIn: true }),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
