import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = props => {
    return (
        <form>
            <OptionColor currentColor={props.currentColor} colors={props.colors} setCurrentColor={props.setCurrentColor}/>
            <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
            <Button className={styles.button} onClick={props.addToCart}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

ProductForm.propTypes = {
    currentColor: PropTypes.string.isRequired,
	colors: PropTypes.array.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductForm;