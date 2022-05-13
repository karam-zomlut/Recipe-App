import React, { useEffect } from 'react';

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);
  
  const getPopular = async () => {
    // const result = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    // const data = await result.json();
    // localStorage.setItem('popular', JSON.stringify(data));
    const data = JSON.parse(localStorage.getItem('popular'));
    console.log(data);
  }

  return (
    <div>Popular</div>
  )
}

export default Popular