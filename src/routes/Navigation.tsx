import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { 
	DynamicForm,
	RegisterPage, 
	FormikAbstract, 
	FormikBasicPage, 
	FormikComponents, 
	FormikYupPage, 
	RegisterFormikPage
} from '../03-forms';

import reactLogo from '../assets/react.svg';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={reactLogo} alt="React Logo" />
					<ul>
						<li>
							<NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
						</li>
						<li>
							<NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Fomik-basic</NavLink>
						</li>
						<li>
							<NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Fomik-Yup</NavLink>
						</li>
						<li>
							<NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Fomik-Components</NavLink>
						</li>
						<li>
							<NavLink to="/formik-abstract" className={({ isActive }) => isActive ? 'nav-active' : ''}>Fomik-Abstract</NavLink>
						</li>
						<li>
							<NavLink to="/formik-register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Fomik</NavLink>
						</li>
						<li>
							<NavLink to="/dynamic-form" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic form</NavLink>
						</li>
						<li>
							<NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
						</li>
					</ul>
				</nav>


				<Routes>
					<Route path="/register" element={<RegisterPage/>} />
					<Route path="/formik-basic" element={<FormikBasicPage/>} />
					<Route path="/formik-yup" element={<FormikYupPage/>} />
					<Route path="/formik-components" element={<FormikComponents/>} />
					<Route path="/formik-abstract" element={<FormikAbstract/>} />
					<Route path="/formik-register" element={<RegisterFormikPage/>} />
					<Route path="/dynamic-form" element={<DynamicForm/>} />
					<Route path="/" element={<h1>Home</h1>} />

					<Route path="/*" element={<Navigate to="/" replace />} />
				</Routes>

			</div>
		</BrowserRouter>
	)
}
