import React, {useState} from 'react';
import Header from "../../Common/Header/Header";
import Sidenav from "../../Common/Sidenav";
import UsersSection from "./UsersSection";
import AddBookToUser from "./AddBookToUser";
import UserBooksSection from "./UserBooksSection";
import {useSelector} from "react-redux";
import {RootState} from "../../Common/Header/Welcome";

// @ts-ignore
export const SelectedUserContext = React.createContext();

function ManageUsers() {
    const loggedInUser = useSelector((state: RootState) => state.login.user);
    const [selectedUserContext, setSelectedUserContext] = useState(loggedInUser);
    return (
        <div>
            <SelectedUserContext.Provider value={[selectedUserContext, setSelectedUserContext]}>
                <Header/>
                {(selectedUserContext.id === loggedInUser.id) ? <AddBookToUser/> : null}
                <Sidenav/>
                <UsersSection/>
                <UserBooksSection/>
            </SelectedUserContext.Provider>
        </div>
    );
}

export default ManageUsers;
