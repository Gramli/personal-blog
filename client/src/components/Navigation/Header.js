import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`

& ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

& li {
  float: left;
}

 & li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

& li a:hover {
  background-color: #1d9410;
}
`;

const Header = () => {
  return (
    <div>
      <StyledNav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/administration">Administration</Link>
          </li>
        </ul>
      </StyledNav>
    </div>
  );
};

export default Header;
