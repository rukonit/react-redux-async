import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useEffect } from 'react';
import sendCartData, { fetchCartData } from '../../store/cart-effects';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

let isFirstRun = true

const Products = (props) => {

  const dispatch = useDispatch()

const cart = useSelector(state => state.items)
const totalQuantity = useSelector(state => state.totalQuantity)
const cartChanged = useSelector(state => state.changed)
  const DUMMY_PRODUCTS = [
    { title: "Salad", price: 15, description: "Mix Vegi Salad", id: 1 },
    { title: "Chicken Sandwich", price: 10, description: "Delicious Chicken Sandwich", id: 2 },
    { title: "Fries", price: 5, description: "Potato Fries", id: 3 }
  ]
  useEffect(() => {
    if(!isFirstRun){

      if(cartChanged) {
    dispatch(sendCartData({cart, totalQuantity}))
      }
    }

    isFirstRun = false
 
  }, [cart, dispatch, totalQuantity])

  useEffect(()=> {

    dispatch(fetchCartData())
    
  }, [dispatch])

  const addToCart = (item) => {
    dispatch(cartActions.addToCart(
      item
     ))}

  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map(item =>
        <ProductItem onAddToCart={addToCart}
        key={item.id}
        id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
