import {User} from "../../componnents/Pages/Home/UserLogin";

export const login = (user: User) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}