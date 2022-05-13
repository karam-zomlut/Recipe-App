import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('Instructions');
  const { id } = useParams();
  const getRecipe = async (id) => {
    const check = localStorage.getItem('singleRecipe');
    if (check) {
      setRecipe(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      localStorage.setItem('singleRecipe', JSON.stringify(data));
      setRecipe(data);
    }
  };
  useEffect(() => {
    getRecipe(id);
  }, [id]);
  console.log(recipe);
  return (
    <>
      {recipe ? (
        <RecipeStyled>
          <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
          </div>
          <Info>
            <Button
              className={activeTab === 'Instructions' ? 'active' : ''}
              onClick={(e) => setActiveTab(e.target.textContent)}>
              Instructions
            </Button>
            <Button
              className={activeTab === 'Ingredients' ? 'active' : ''}
              onClick={(e) => setActiveTab(e.target.textContent)}>
              Ingredients
            </Button>
            {activeTab === 'Instructions' ? (
              <div>
                <h4 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h4>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: recipe.instructions,
                  }}></h4>
              </div>
            ) : (
              <ul>
                {recipe.extendedIngredients.map((ingredient, index) => {
                  return <li key={ingredient.id}>{ingredient.original}</li>;
                })}
              </ul>
            )}
          </Info>
        </RecipeStyled>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const RecipeStyled = styled.div`
  margin: 10rem 0 5rem 0;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 1rem;
    font-weight: 500;

    a{
      color: #006BFF;
    }
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  color: #313131;
  background: #fff;
  border: 2px solid #313131;
  margin: 0 1.5rem 1.5rem 0;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 8rem;
`;

export default Recipe;
