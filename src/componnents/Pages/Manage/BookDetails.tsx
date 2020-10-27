import React, {useContext} from 'react';
import DeleteButton from "../../Common/DeleteButton";
import FavoriteButton from "../../Common/FavoriteButton";
import {gql, useMutation} from "@apollo/client";
import {SelectedUserContext} from "./ManageUsers";
import {useSelector} from "react-redux";
import {RootState} from "../../Common/Header/Welcome";

export interface Book {
    bookId: string,
    bookName?: string,
    authorFirstName?: string,
    authorLastName?: string
}

interface BookDetailsProps {
    book: Book
}

const DELETE_BOOK_FROM_READER = gql`
    mutation DeleteBookListByReaderIdAndBookId($readerId: UUID!, $bookId: UUID!) {
      deleteBookListByReaderIdAndBookId(input: {readerId: $readerId, bookId: $bookId}) {
        deletedBookListId
      }
    }
`

function BookDetails(props: BookDetailsProps) {

    const loggedInUser = useSelector((state: RootState) => state.login.user);
    const [selectedUserContext] = useContext(SelectedUserContext);
    const [deleteBookFromReader] = useMutation(DELETE_BOOK_FROM_READER);

    const removeBook = () => {
        deleteBookFromReader({
            variables: {
                readerId: loggedInUser.id,
                bookId: props.book.bookId
            }
        }).then(() => alert("Book was successfully removed"))
            .catch(() => alert("Could not remove the book"));
    }

    const isFavoriteBook = false;

    const toggleFavorite = () => {
        isFavoriteBook ? alert("Book was successfully removed from favorites") :
            alert("Book was successfully added to favorites");
    }

    return (
        <div className="details-box">
            מזהה: {props.book.bookId}
            שם:{props.book.bookName} סופר: {props.book.authorFirstName} {props.book.authorLastName}
            {(selectedUserContext.id === loggedInUser.id) ?
                <FavoriteButton onClick={() => toggleFavorite()} isFavorite={isFavoriteBook}/> : null}
            {(selectedUserContext.id === loggedInUser.id) ?
                <DeleteButton onClick={() => removeBook()}/> : null}
        </div>
    );
}

export default BookDetails;