import React, {Component} from 'react';
import Header from "../../Common/Header/Header";
import Sidenav from "../../Common/Sidenav";
import AuthorsSection from "./AuthorsSection";
import AuthorBooksSection from "./AuthorBooksSection";

class ManageAuthors extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidenav/>
                <AuthorsSection/>
                <AuthorBooksSection/>
            </div>
        );
    }
}

export default ManageAuthors;