import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const totalQuantity = useSelector(state => state.totalQuantity)
  return (
    <button onClick={props.click} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
