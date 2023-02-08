import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { onChangeArgs, Product, ProductContextProps } from '../interfaces/Interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
	children?: React.ReactElement | React.ReactElement[];
	product: Product;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args:onChangeArgs) => void;
	value?:number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

	const { counter, increaseBy } = useProduct( { onChange, product, value } )

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