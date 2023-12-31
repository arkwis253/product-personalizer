import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
	const selectColor = color => {
    props.setCurrentColor(color);
  };

	const prepareColorClassName = color => {
		return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
	};

	return (
		<div className={styles.colors}>
			<h3 className={styles.optionLabel}>Colors</h3>
			<ul className={styles.choices}>
				{props.colors.map (item => 
					<li key={item}>
						<button type="button" 
							onClick={() => selectColor(item)} 
							className={clsx(prepareColorClassName(item), item === props.currentColor && styles.active)}>
						</button>
					</li>)}
			</ul>
		</div>
    );
};

OptionColor.propTypes = {
	currentColor: PropTypes.string.isRequired,
	colors: PropTypes.array.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;