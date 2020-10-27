import React, {useContext} from 'react';
import DeleteButton from "../../Common/DeleteButton";
import EditButton from "../../Common/EditButton";
import {User} from '../Home/UserLogin';
import {SelectedUserContext} from "./ManageUsers";


interface UsersProps {
    users: User[]
}

function UserDetails(props: UsersProps) {
    const [selectedUserContext, setSelectedUserContext] = useContext(SelectedUserContext);

    return (
        <div>
            {
                props.users.map((user) => {
                    // @ts-ignore
                    return <div className="details-box" onClick={() => setSelectedUserContext(user)}>
                        <div>מזהה:
                            <span className={"user-id"}>{user.id}</span></div>
                        <div>שם: {user.firstName} {user.lastName}</div>
                        <EditButton/>
                        <DeleteButton onClick={null}/>
                    </div>
                })}
        </div>
    );
}

export default UserDetails;