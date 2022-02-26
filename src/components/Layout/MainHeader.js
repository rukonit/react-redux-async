import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';


const MainHeader = (props) => {
  const dispatch = useDispatch()
  const toggleHandler = () => {
    dispatch(cartActions.toggleCart())
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton click={toggleHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
