import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logout} from "../../../store/actions/logoutAction";

function UserLogout() {
    const dispatch = useDispatch();
    return (
        <div className="logout">
            {/*TODO change to logout action*/}
            <Link onClick={() => dispatch(logout())} to="/">התנתק</Link>
        </div>
    );
}

export default UserLogout;