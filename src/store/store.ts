import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/auth.api'
import { collectionApi } from './api/collection.api'
import { marketplaceApi } from './api/marketplace.api'
import { carouselSlice } from './carousel/carousel.slice'
import { cartSlice } from './cart.slice'

const reducers = combineReducers({
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer,
	[collectionApi.reducerPath]: collectionApi.reducer,
	[marketplaceApi.reducerPath]: marketplaceApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(collectionApi.middleware)
			.concat(marketplaceApi.middleware)
			.concat(authApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>
