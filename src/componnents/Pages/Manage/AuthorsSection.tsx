import React from 'react';
import UserDetails from "./UserDetails";
import {gql, useQuery} from "@apollo/client";
import {User} from "../Home/UserLogin";

function AuthorsSection() {
    const GET_AUTHORS_QUERY = gql`
    query AllAuthors {
       allAuthors{
        nodes{
          firstName, lastName, id
        }
      }
    }
`;
    const {loading, error, data} = useQuery(GET_AUTHORS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const authors: User[] = data.allAuthors.nodes;
    return (
        <div className="right-section">
            <UserDetails users={authors}/>
        </div>
    );
}

export default AuthorsSection;