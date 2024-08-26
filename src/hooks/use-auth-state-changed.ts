import {useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "../config/firebase.ts";
import {axios} from "../config/axios.ts";
import { useUserStore} from "./store/use-user-store.ts";
import {User} from "../types/user.ts";


type UserState = 'null' | 'success' | 'loading' | 'error'

export default function useAuthStateChanged() {

    const [userState, setUserState] = useState<UserState>('loading');
    const setUser = useUserStore(state => state.setData)

    useEffect(() => {
        return onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setUserState('null');
                return setUser(null)
            }
            try {
                const user = await axios.get('/api/user/profile') as unknown as User
                setUser(user)
                setUserState('success');
            } catch {
                setUserState('error');
            }
        });
    }, []);

    return userState;
}
