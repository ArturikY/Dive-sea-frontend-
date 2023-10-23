import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IProduct } from '../../components/ui/product/Product.interface'
import { IRequestProduct } from '../../types/requestProduct.interface'

const API_URL = 'http://localhost:5000'

export const marketplaceApi = createApi({
	reducerPath: 'marketplace_api',
	tagTypes: ['Marketplace'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		getMarketplace: builder.query<IProduct[], string>({
			query: (sort: string) => `/products${sort}`,
			// Для подгружения добавленных объектов без обновления страницы
			providesTags: () => [
				{
					type: 'Marketplace',
				},
			],
		}),
		getProduct: builder.query<IProduct, string | undefined>({
			query: productId => ({ url: `/products/${productId}` }),
		}),
		createProduct: builder.mutation<IProduct, IRequestProduct>({
			query: product => ({
				body: product,
				url: '/products',
				method: 'POST',
			}),
			invalidatesTags: () => [
				{
					type: 'Marketplace',
				},
			],
		}),
	}),
})

export const {
	useGetMarketplaceQuery,
	useGetProductQuery,
	useCreateProductMutation,
} = marketplaceApi
