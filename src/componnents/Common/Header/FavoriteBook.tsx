import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {useSelector} from "react-redux";
import {RootState} from "./Welcome";

function FavoriteBook() {

    const GET_FAVORITE_BOOK_QUERY = gql`
    query GetFavoriteBook ($readerId: UUID!) {
        favoriteByReaderId(readerId: $readerId) {
            bookByBookId {
                name
            }
        }
    }
    `;
    const user = useSelector((state: RootState) => state.login.user);

    const {loading, error, data} = useQuery(GET_FAVORITE_BOOK_QUERY, {
        variables: {readerId: user.id},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const bookName = data.favoriteByReaderId.bookByBookId.name;

    return (
        <div className="favorite-book">
            הספר המועדף עליך: {bookName}
        </div>
    );
}

export default FavoriteBook;