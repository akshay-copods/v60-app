import { create } from 'zustand';

export const useAppStore = create((set) => ({
  isSignedIn: false,
  signIn: () => set({ isSignedIn: true }),
}));
