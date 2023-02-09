
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

const product = products[0]


export const ShoppingPage = () => {



	return (
		<div>
			<h1>Shopping store</h1>
			<hr />

			<ProductCard
				key={product.id}
				product={product}
				initialValues={{
					count: 6,
					maxCount: 15
				}}

			>
				{
					({ reset,count, increaseBy, isMaxCountReached, maxCount }) => (
						<>
							<ProductImage />
							<ProductTitle/>
							<ProductButtons  />
						</>
					)
				}

			</ProductCard>

		</div>
	)
}
