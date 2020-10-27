import React from 'react';
import './css/styles.css';
import Home from "./componnents/Pages/Home/Home";
import {BrowserRouter, Route} from 'react-router-dom';
import ManageUsers from "./componnents/Pages/Manage/ManageUsers";
import ManageBooks from "./componnents/Pages/Manage/ManageBooks";
import ManageAuthors from "./componnents/Pages/Manage/ManageAuthors";


function App() {
    return (
        <BrowserRouter>
            <Route
                exact={true}
                path="/"
                component={Home}
            />
            <Route
                path="/manage-users"
                component={ManageUsers}
            />
            <Route
                path="/manage-books"
                component={ManageBooks}
            />
            <Route
                path="/manage-authors"
                component={ManageAuthors}
            />
        </BrowserRouter>
    );
}

export default App;
