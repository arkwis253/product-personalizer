import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    const size = props.sizes.find(item => item.name === currentSize);
    if(size)
      return props.basePrice + size.additionalPrice;
  };

  const addToCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);

  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor}/>

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>

        <ProductForm 
          setCurrentSize  = {setCurrentSize}
          setCurrentColor = {setCurrentColor}
          addToCart       = {addToCart}
          colors          = {props.colors} 
          currentColor    = {currentColor} 
          sizes           = {props.sizes} 
          currentSize     = {currentSize}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;