import React, { useEffect } from 'react';

const CocktailFetcher = ({ letter, setCocktails }) => {
    useEffect(() => {
        if (letter) {
            const fetchCocktails = async () => {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
                const data = await response.json();
                console.log("Data has been received");
                setCocktails(data.drinks || []);
            };
            fetchCocktails();
        }
    }, [letter, setCocktails]);

    return null;
};

export default CocktailFetcher;
