import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cuisine = () => {
  const [ cuisine, setCuisine ] = useState([]);
  const { type } = useParams();
  const getCuisine = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const data = await response.json();
    setCuisine(data.results);
  }
  useEffect(() => {
    getCuisine(type);
  }, [type])
  return (
    <Grid>
      {
        cuisine.map(recipe => {
          return (
            <Card key={recipe.id} to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title.length > 20 ? recipe.title.split('').slice(0, 20).join('') + '...' : recipe.title}</h4>
            </Card>
          )
        })
      }
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
`;
const Card = styled(Link)`
  text-decoration: none;
  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 1rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine