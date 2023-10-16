import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <span style={{ margin: '0 10px' }}>|</span>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default SharedLayout;
