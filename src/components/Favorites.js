import React, { useState, useEffect } from 'react';
import Floating from './Floating';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const handleRemoveFromFavorites = (idDrink) => {
        const updatedFavorites = favorites.filter(fav => fav.idDrink !== idDrink);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div>
            <h2>Your Favorites</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {favorites.map(favorite => (
                    <div key={favorite.idDrink} style={{ border: '2px solid black', textAlign: 'center' }}>
                        <img src={favorite.strDrinkThumb} alt={favorite.strDrink} style={{ maxHeight: '300px', maxWidth: 'auto', border: '2px solid black' }} />
                        <h3>{favorite.strDrink}</h3>
                        <button onClick={() => Floating.show(favorite)} style={{ padding: '5px', marginBottom: '8px' }}>View Details</button>
                        <button onClick={() => handleRemoveFromFavorites(favorite.idDrink)} style={{ padding: '5px', marginBottom: '8px', marginLeft: '8px' }}> Remove</button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Favorites;
