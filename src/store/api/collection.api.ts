import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICollection } from '../../components/screens/home/collection/Collection.interface'

const API_URL = 'https://dive-sea-backend.netlify.app'

export const collectionApi = createApi({
	reducerPath: 'collection_api',
	tagTypes: ['Collection'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		getCollection: builder.query<ICollection[], null>({
			query: () => '/collections',
			// Для подгружения добавленных объектов без обновления страницы
			providesTags: () => [
				{
					type: 'Collection',
				},
			],
		}),
	}),
})

export const { useGetCollectionQuery } = collectionApi
