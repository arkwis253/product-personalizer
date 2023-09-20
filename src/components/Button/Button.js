import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (<button onClick={props.onClick}className={clsx(styles.button, props.className)}>{props.children}</button>);
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
};

export default Button;