import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/Interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const productCard:ProductCardHOCProps =  Object.assign(ProductCardHOC, { 
	Buttons: ProductButtons, 
	Image: ProductImage, 
	Title: ProductTitle,
})

export default productCard;

