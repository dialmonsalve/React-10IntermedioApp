import { lazy, LazyExoticComponent } from "react";
import LazyLayout from "../01-lazyload/layout/LazyLayout";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"; */
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

// const lazy1 = lazy(()=> import (/* webpackChunkName "lazyPage1" */'../01-lazyload/pages/LazyPage1'))
// const lazy2 = lazy(()=> import (/* webpackChunkName "lazyPage2" */'../01-lazyload/pages/LazyPage2'))
// const lazy3 = lazy(()=> import (/* webpackChunkName "lazyPage3" */'../01-lazyload/pages/LazyPage3'))
const lazyLayout = lazy(()=> import (/* webpackChunkName "lazyPage3" */'../01-lazyload/layout/LazyLayout'))


export const routes:Route[] = [
	{
		path: '/lazyload/*',
		to: '/lazyload',
		Component: LazyLayout,
		name: 'lazyLayout Dashboard'
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No lazy'
	},
/* 	{
		to: '/lazy3',
		path: 'lazy3',
		Component: lazy3,
		name: 'lazy-3'
	}, */
]
