import React from 'react';
import UserDetails from "./UserDetails";
import {useQuery} from "@apollo/client";
import {GET_READERS_QUERY, User} from "../Home/UserLogin";


function UsersSection() {
    const {loading, error, data} = useQuery(GET_READERS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const users: User[] = data.allReaders.nodes;

    return (
        <div className="right-section">
            <UserDetails users={users}/>
        </div>
    );
}

export default UsersSection;