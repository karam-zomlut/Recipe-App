import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/Amerecan'}>
        <FaHamburger />
        <h4>Amerecan</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export default Categories