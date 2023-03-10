import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import { routes } from './routes';
import reactLogo from '../assets/react.svg';
import { Suspense } from 'react';



export const Navigation = () => {

	return (

		<Suspense  fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className='main-layout' >
					<nav>
						<img src={reactLogo} alt="React Logo" />
						<ul>
							{
								routes.map(({ to, name }) => (
									<li key={to}>
										<NavLink
											to={to}
											className={({ isActive }) => isActive ? 'nav-active' : ''}
										>
											{name}
										</NavLink>
									</li>
								))
							}
						</ul>
					</nav>

					<Routes>

						{
							routes.map(({ to, path, Component }) => (
								<Route
									key={to}
									path={path}
									element={<Component />}
								/>
							))
						}
						<Route path="/*" element={<Navigate to={routes[0].to} replace />} />

					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	)
}
