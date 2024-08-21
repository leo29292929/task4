import React from 'react';
import ReactDOM from 'react-dom';

const Floating = {
    show(cocktail) {
        const floatingDiv = document.createElement('div');
        floatingDiv.style.position = 'fixed';
        floatingDiv.style.top = '50%';
        floatingDiv.style.left = '50%';
        floatingDiv.style.transform = 'translate(-50%, -50%)';
        floatingDiv.style.padding = '20px';
        floatingDiv.style.backgroundColor = 'white';
        floatingDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        floatingDiv.style.zIndex = '1000';
        floatingDiv.style.width = '300px';


        // Create an array of ingredients
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            if (cocktail[`strIngredient${i}`]) {
                ingredients.push(cocktail[`strIngredient${i}`]);
            }
        }

        const measurements = [];
        for (let i = 1; i <= 15; i++) {
            if (cocktail[`strMeasure${i}`]) {
                measurements.push(cocktail[`strMeasure${i}`]);
            }
        }

        const content = (
            <div>
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100%' }} />
                <p>{cocktail.strGlass}</p>
                <p>{cocktail.strInstructions}</p>
                <h3>Ingredients:</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <b><p>Measurements</p></b>
                <ul>
                    {measurements.map((measure, index) => (
                        <li key={index}>{measure}</li>
                    ))}
                </ul>
                <button onClick={() => document.body.removeChild(floatingDiv)}>Close</button>
            </div>
        );

        ReactDOM.render(content, floatingDiv);
        document.body.appendChild(floatingDiv);
    }
};

export default Floating;
