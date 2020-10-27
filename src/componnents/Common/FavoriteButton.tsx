import React from 'react';

interface FavoriteButtonProps {
    onClick: any,
    isFavorite: boolean
}

function FavoriteButton(props: FavoriteButtonProps) {
    return (
        props.isFavorite ?
            <button onClick={props.onClick}>
                <img className="icon-button" src="favorite-full.ico" alt="remove from favorites"/>
            </button>
            :
            <button onClick={props.onClick}>
                <img className="icon-button" src="favorite-empty.ico" alt="add to favorites"/>
            </button>
    );
}

export default FavoriteButton;