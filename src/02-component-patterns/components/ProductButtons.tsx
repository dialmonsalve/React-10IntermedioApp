import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css';
import { useCallback, useContext } from 'react';

export interface Props {
	className?: string;
	style?: React.CSSProperties;
	maxCount?:number
}

export const ProductButtons = ({className, style }:Props) => {

	const { increaseBy, counter, maxCount  } = useContext(ProductContext)

	const isMaxReached = useCallback(
		() => {
			if(counter === maxCount) return true

			return false
		},
		[counter, maxCount],
	)

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
				className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}` }
			>+

			</button>
		</div>
	)
}