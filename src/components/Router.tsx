import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './screens/auth/login/Login'
import { Register } from './screens/auth/register/Register'
import { Home } from './screens/home/Home'
import { Marketplace } from './screens/marketplace/Marketplace'
import { Sell } from './screens/sell/Sell'
import { ProductDetail } from './screens/product-detail/ProductDetail'

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Marketplace />} path='/marketplace' />
				<Route element={<Sell />} path='/sell' />
				<Route element={<ProductDetail />} path='/marketplace/:id' />
				<Route element={<Login />} path='/login' />
				<Route element={<Register />} path='/register' />

				<Route element={<h1>Page Not Found</h1>} path='*' />
			</Routes>
		</BrowserRouter>
	)
}
