import React, { useState } from 'react';

const Header = ({ onSearch, onFavoritesClick }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        if (inputValue) {
            onSearch(inputValue);
        }
    };

    return (
        <header style={{ border: '2px solid black', padding: '50px', marginBottom: '20px' }}>
            <input style={{ marginLeft: '30%', marginRight: '20px', padding: '5px' }}
                type="text"
                placeholder="Enter a letter"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                maxLength="1"
            />
            <button onClick={handleSearch} style={{ padding: '5px', marginRight: '8px' }}>Search</button>
            <button onClick={onFavoritesClick} style={{ padding: '5px' }}>Favorites</button>
        </header>
    );
};

export default Header;
