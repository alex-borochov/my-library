import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Sidenav extends Component {
    render() {
        return (
            <div className="sidebar">
                <Link className="sidebar-item" to="manage-users">ניהול משתמשים</Link>
                <Link className="sidebar-item" to="manage-books">ניהול ספרים</Link>
                <Link className="sidebar-item" to="manage-authors">ניהול סופרים</Link>
            </div>
        );
    }
}

export default Sidenav;