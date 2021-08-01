import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import Button from '../ui/Button';
import StyledNav from '../ui/StyledNav';


const Header : React.FC = () => {

  const loginCtx = useContext(LoginContext);

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
          {loginCtx.logged && <Link to="/administration">Administration</Link>}
          </li>
          {loginCtx.logged && <Button align={'right'} onClick={loginCtx.logOut}>Logout</Button>}
        </ul>
      </StyledNav>
    </div>
  );
};

export default Header;
