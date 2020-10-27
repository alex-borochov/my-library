import React, {useContext} from 'react';
import BookDetails, {Book} from "./BookDetails";
import {gql, useQuery} from "@apollo/client";
import {SelectedUserContext} from "./ManageUsers";

const GET_BOOKS_READ_BY_USER_QUERY = gql`
    query GetBooksReadByUser($readerId: UUID!) {
       getBooksReadByUser(id: $readerId) {
        nodes {
            authorFirstName,
            authorLastName,
            bookId,
            bookName
        }
      }
    }
`;


function UserBooksSection() {
    const [selectedUserContext] = useContext(SelectedUserContext);
    const {loading, error, data} = useQuery(GET_BOOKS_READ_BY_USER_QUERY, {
        variables: {readerId: selectedUserContext.id},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const userBooks: Book[] = data.getBooksReadByUser.nodes;
    console.log(userBooks);

    return (
        <div className="left-section">
            הספרים שקרא {selectedUserContext.firstName} {selectedUserContext.lastName}:
            {
                userBooks.map((book) => <BookDetails book={book}/>)
            }
        </div>
    );
}

export default UserBooksSection;