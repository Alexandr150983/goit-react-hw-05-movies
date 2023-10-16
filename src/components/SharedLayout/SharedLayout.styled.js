import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #333;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
    color: tomato;
  }
`;
