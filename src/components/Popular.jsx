import React, { useEffect, useState } from 'react';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  
  const getPopular = async () => {
    // const result = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    // const data = await result.json();
    // localStorage.setItem('popular', JSON.stringify(data));
    const data = JSON.parse(localStorage.getItem('popular'));
    setPopular(data.recipes);
  }

  return (
    <div>
      <h1>Popular</h1>
      {
        popular.map(recipe => {
          return (
            <div key={recipe.id}>
              <p>{recipe.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Popular