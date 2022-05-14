import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const { query } = useParams();
  const getSearched = async (query) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`
    );
    const data = await response.json();
    setResults(data.results);
  };
  useEffect(() => {
    getSearched(query);
  }, [query]);
  return (
    <Grid>
      {results.map((recipe) => {
        return (
            <Card key={recipe.id} to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title.length > 20 ? recipe.title.split('').slice(0, 20).join('') + '...' : recipe.title}</h4>
            </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  text-decoration: none;
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

export default SearchResults