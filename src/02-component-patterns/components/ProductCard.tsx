import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { Product, ProductContextProps } from '../interfaces/Interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
	children?: React.ReactElement | React.ReactElement[];
	product: Product;
	className?: string;
	style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

	const { counter, increaseBy } = useProduct()

	return (

		<Provider value={{ counter,  product, increaseBy }}>
			
			<div 
				style={style}
				className={ `${styles.productCard} ${ className }` }>
				{children}
			</div>
		</Provider>

	)
}