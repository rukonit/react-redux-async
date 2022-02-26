import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  
  const carts = useSelector(state => state.items)

  const cartItems =  carts.map((cart, index) => <CartItem key={index} itemIndex = {index}
    item={{ title: cart.title, quantity: cart.quantity, total: cart.total, price: cart.price }}
  />)     

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;
