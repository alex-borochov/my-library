import React from 'react';

interface DeleteButtonProps {
    onClick: any
}

function DeleteButton(props: DeleteButtonProps) {
    return (
        <button className="delete-button" onClick={props.onClick}>
            <img className="icon-button" src="trash.ico" alt="delete"/>
        </button>
    );
}

export default DeleteButton;