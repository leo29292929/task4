import React, { useState } from 'react';
import Header from './components/Header';
import CocktailFetcher from './components/CocktailFetcher';
import CocktailGrid from './components/CocktailGrid';
import Favorites from './components/Favorites';

const App = () => {
    const [letter, setLetter] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const handleFavoritesClick = () => {
        setShowFavorites(true);
    };

    const handleSearch = (letter) => {
        setLetter(letter);
        setShowFavorites(false);
    };

    return (
        <div>
            <Header onSearch={handleSearch} onFavoritesClick={handleFavoritesClick} />
            {showFavorites ? (
                <Favorites />
            ) : (
                <>
                    <CocktailFetcher letter={letter} setCocktails={setCocktails} />
                    <CocktailGrid cocktails={cocktails} />
                </>
            )}
        </div>
    );
};

export default App;
