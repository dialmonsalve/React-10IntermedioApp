import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css';
import { useContext } from 'react';

export interface Props {
	className?: string;
	style?: React.CSSProperties; 
}

export const ProductButtons = ({className, style}:Props) => {

	const { increaseBy, counter  } = useContext(ProductContext)

	return (
		<div 
			style={style}
			className={`${styles.buttonsContainer} ${ className } `  }>
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