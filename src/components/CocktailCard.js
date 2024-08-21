import React from 'react';

const CocktailCard = ({ cocktail, onFavorite }) => {
    const handleFavorite = () => {
        onFavorite(cocktail);
    };

    return (
        <div style={styles.card}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={styles.image} />
            <h3>{cocktail.strDrink}</h3>
            <p>{cocktail.strInstructions}</p>

            <button onClick={handleFavorite} style={styles.button}>
                Add to Favorites
            </button>
        </div>
    );
};



export default CocktailCard;
