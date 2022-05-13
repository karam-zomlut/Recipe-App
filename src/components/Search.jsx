import { useState } from 'react';
import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  }
  return (
    <FormStyle onSubmit={submitSearch}>
      <RiSearchLine />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search'
        value={search}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 2rem auto;
  position: relative;
  width: 100%;
  max-width: 500px;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
    font-size: 1.1rem;
    padding: 0.8rem 1rem 0.5rem 3rem;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0.7rem;
    color: #fff;
    transform: translateY(-50%);
    font-size: 1.2rem;
  }
`;

export default Search;
