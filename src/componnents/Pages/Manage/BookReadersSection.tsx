import React from 'react';
import UserDetails from "./UserDetails";
import {User} from "../Home/UserLogin";

function BookReadersSection() {
    //TODO implement this
//     const GET_BOOK_READERS_QUERY = gql`
//     query ReadersByBook {
//        allAuthors{
//         nodes{
//           firstName, lastName, id
//         }
//       }
//     }
// `;
//     const { loading, error, data } = useQuery(GET_BOOK_READERS_QUERY);
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
//     const readers : User[]= data.allReaders.nodes;
    const readers: User[] = [];

    return (
        <div className="left-section">
            הקוראים של לא רציונלי ולא במקרה:
            <UserDetails users={readers}/>
        </div>
    );
}

export default BookReadersSection;