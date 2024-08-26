import { create } from 'zustand'
import {User} from "../../types/user.ts";

export type UserStore = {
    data: User|null
    setData: (data: User|null)=>void
}

export const useUserStore = create<UserStore>()((set) => ({
    data: null,
    setData: (data)=>set({data})
}))