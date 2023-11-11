import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';

const Header = () => {
  const auth = useSelector(state => state.isAuth)
  const dispatch = useDispatch()
  const logoutHandler = () =>{
    dispatch({
      type : 'IsLogout'
    })
  }
  return (
    
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
     {auth &&  <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick = {logoutHandler}>Logout</button>
          </li>
        </ul> } 
      </nav>
    </header>
  );
};

export default Header;
