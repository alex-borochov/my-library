import React from 'react';
import BookDetails, {Book} from "./BookDetails";

function BooksSection() {
    const allBooks: Book[] = [{
        bookId: "string",
        bookName: "string",
        authorFirstName: "string",
        authorLastName: "string"
    }];
    return (
        <div className="right-section">
            {
                // allBooks.forEach((book) => <BookDetails book={book}/>)
                <BookDetails book={{
                    bookId: "string",
                    bookName: "string",
                    authorFirstName: "string",
                    authorLastName: "string"
                }}/>
            }
        </div>
    );
}

export default BooksSection;