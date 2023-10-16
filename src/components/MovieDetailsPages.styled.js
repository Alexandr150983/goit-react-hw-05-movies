import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
`;

export const Overview = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const Genres = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const ReleaseDate = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const Average = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const Additional = styled.div`
  width: 100%;
  background-color: #333;
`;

export const Nav = styled.nav`
  width: 100%;
  ul {
    background-color: #333;
    display: inline;
    list-style: none;
    padding: 0;
    color: white;
    p {
      font-size: 20px;
    }
    li {
      font-size: 16px;

      a {
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        color: #007bff;
        transition: color 0.3s;

        &:hover {
          color: #0056b3;
        }
      }
    }
  }
`;
