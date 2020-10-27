import React from 'react';
import FavoriteBook from "./FavoriteBook";
import {useSelector} from "react-redux";
import {User} from '../../Pages/Home/UserLogin'
import {Book} from "../../Pages/Manage/BookDetails";

export interface RootState {
    login: { user: User },
    favoriteBook: Book
}

function Welcome() {
    const user = useSelector((state: RootState) => state.login.user);
    return (
        <div className="welcome">
            <div className="hello-user"> שלום, {user.firstName} {user.lastName}!</div>
            <FavoriteBook/>
        </div>
    );
}

export default Welcome;
