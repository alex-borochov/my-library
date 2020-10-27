import React from 'react';
import BookDetails, {Book} from "./BookDetails";

function AuthorBooksSection() {
    const authorBooks: Book[] = [];
    return (
        <div className="left-section">
            הספרים של פרופ' דן אריאלי:
            {
                authorBooks.forEach((book) => <BookDetails book={book}/>)
            }
        </div>
    );
}

export default AuthorBooksSection;