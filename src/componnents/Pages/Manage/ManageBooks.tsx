import React, {Component} from 'react';
import Header from "../../Common/Header/Header";
import Sidenav from "../../Common/Sidenav";
import BooksSection from "./BooksSection";
import BookReadersSection from "./BookReadersSection";

class ManageBooks extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidenav/>
                <BooksSection/>
                <BookReadersSection/>
            </div>
        );
    }
}

export default ManageBooks;