import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../components/ui/product/Product.interface'

const initialState: IProduct[] = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload: product }: PayloadAction<IProduct>) => {
			if (!state.some(el => el.id === product.id)) {
				// action.payload - элемент на добавление
				state.push(product)
			}
		},

		removeFromCart: (state, { payload: product }: PayloadAction<IProduct>) => {
			const index = state.findIndex(item => item.id === product.id)
			if (index !== -1) {
				state.splice(index, 1)
			}
		},
	},
})
