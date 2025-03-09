import { User } from "@prisma/client";
import { create } from "zustand";

interface AuthStore {
    user: User | null;
    setUser: (data: User) => void;
    clearUser: () => void;
}

export const authStore = create<AuthStore>((set) => ({
    user: null,
    setUser: (data) => set({ user: data }),
    clearUser: () => set({ user: null }),
}));