import React, {Component} from 'react';
import Title from "../Title";
import Welcome from "./Welcome";
import UserLogout from "./UserLogout";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Title/>
                <Welcome/>
                <UserLogout/>
            </div>
        );
    }
}

export default Header;