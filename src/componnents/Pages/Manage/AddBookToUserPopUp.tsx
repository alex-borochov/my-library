import React from 'react';
import {gql, useMutation} from "@apollo/client";
import {useSelector} from "react-redux";
import {RootState} from "../../Common/Header/Welcome";

interface AddBookToUserPopUpProps {
    toggle: any,
    books: any[]
}


const ADD_BOOK_TO_USER = gql`
    mutation CreateBookList($readerId: UUID!, $bookId: UUID!) {
      createBookList(input: {bookList: {readerId: $readerId, bookId: $bookId}}) {
        clientMutationId
      }
    }
`;

function AddBookToUserPopUp(props: AddBookToUserPopUpProps) {
    const loggedInUser = useSelector((state: RootState) => state.login.user);

    let selectedBookId: string = props.books[0].id;

    const [addBookToUser, {loading, error, called}] = useMutation(ADD_BOOK_TO_USER);


    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={() => {
                    props.toggle()
                }}>&times; </span>
                {
                    <select onChange={(event) => {
                        selectedBookId = event.target.value;
                    }
                    } title="בחר ספר">

                        {
                            props.books.map((book: any) => {
                                return <option value={book.id}>{book.name}</option>;
                            })
                        }

                    </select>
                }
                <button disabled={loading} onClick=
                    {() => {
                        addBookToUser({
                            variables: {
                                readerId: loggedInUser.id,
                                bookId: selectedBookId
                            }
                        }).then(() => null).catch(() => null)
                    }}
                >הוסף לרשימת הקריאה
                </button>
                {error && <p>{error.message}</p>}
                {called && !loading && !error && <p>הספר התווסף בהצלחה!</p>}
            </div>
        </div>
    );
}

export default AddBookToUserPopUp;