import React from 'react';
import Floating from './Floating';

const CocktailGrid = ({ cocktails }) => {
    const handleAddToFavorites = (cocktail) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(fav => fav.idDrink !== cocktail.idDrink); // Remove duplicates
        favorites.push(cocktail);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${cocktail.strDrink} added to favorites!`);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', }} >
            {cocktails.map(cocktail => (
                <div key={cocktail.idDrink} style={{ border: '2px solid black', textAlign: 'center' }}>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ maxHeight: '300px', maxWidth: 'auto', border: '2px solid black' }} />
                    <h3 >{cocktail.strDrink}</h3>
                    <button onClick={() => Floating.show(cocktail)} style={{ padding: '5px', marginBottom: '8px' }}>View Details</button>
                    <button onClick={() => handleAddToFavorites(cocktail)} style={{ padding: '5px', marginBottom: '8px', marginLeft: '8px' }}>Add to Favorites</button>
                </div>
            ))
            }
        </div >
    );
};

export default CocktailGrid;


