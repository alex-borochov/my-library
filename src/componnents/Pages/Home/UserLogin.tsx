import React from 'react';
import {Link} from "react-router-dom";
import {login} from '../../../store/actions/loginAction';
import {useDispatch} from "react-redux";
import {gql, useQuery} from '@apollo/client';


export const GET_READERS_QUERY = gql`
    query AllReaders {
       allReaders{
        nodes{
          firstName, lastName, id
        }
      }
    }
`;

export interface User {
    id: string,
    firstName: string,
    lastName: string
}


function UserLogin() {
    const dispatch = useDispatch();

    const {loading, error, data} = useQuery(GET_READERS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const users: User[] = data.allReaders.nodes;
    let selectedUserId: string = users[0].id;
    let selectedUser: User = users[0];

    return (
        <div>
            <select onChange={(event) => {
                selectedUserId = event.target.value;
                selectedUser = users.filter((user: User) => user.id === selectedUserId)[0]
            }
            } className="user-login-combo-box" title="בחר משתמש להתחברות">

                {
                    users.map((user: User) => {
                        return <option value={user.id}>{user.firstName} {user.lastName}</option>;
                    })
                }

            </select>
            <Link className="action-button" to='/manage-users'
                  onClick={() => dispatch(login(selectedUser))}>התחבר</Link>
        </div>
    );
}

export default UserLogin;