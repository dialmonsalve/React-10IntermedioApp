import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css';
import { useContext } from 'react';

export const ProductButtons = () => {

	const { increaseBy, counter  } = useContext(ProductContext)

	return (
		<div className={styles.buttonsContainer}>
			<button
				onClick={() => increaseBy(-1)}
				className={styles.buttonMinus}
			>-

			</button>
			<div className={styles.countLabel}> {counter} </div>

			<button
				onClick={() => increaseBy(1)}
				className={styles.buttonAdd}
			>+

			</button>
		</div>
	)
}