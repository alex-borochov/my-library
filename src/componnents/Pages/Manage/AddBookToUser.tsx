import React, {useState} from 'react';
import AddBookToUserPopUp from "./AddBookToUserPopUp";
import {gql, useQuery} from "@apollo/client";

const GET_ALL_BOOKS_QUERY = gql`
    query AllBooks {
       allBooks{
        nodes{
            name, id
        }
      }
    }
`;

function AddBookToUser() {
    const [seen, setSeen] = useState(false);
    const togglePop = () => {
        setSeen(!seen);
    };

    const {loading, error, data} = useQuery(GET_ALL_BOOKS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const books = data.allBooks.nodes;
    return (
        <div>
            <button className="action-button" id="add-book-to-user" onClick={togglePop}>
                הוסף ספר
            </button>
            {seen ? <AddBookToUserPopUp toggle={togglePop} books={books}/> : null}
        </div>
    );
}

export default AddBookToUser;