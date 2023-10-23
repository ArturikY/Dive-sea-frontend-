import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ILogin } from '../../components/screens/auth/login/Login.interface'
import { IUser } from '../../types/user.interface'

const API_URL = process.env.REACT_API_URL

export const authApi = createApi({
	reducerPath: 'auth_api',
	tagTypes: ['Auth'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		getMe: builder.query({
			query: () => '/auth/me',
			providesTags: () => [
				{
					type: 'Auth',
				},
			],
		}),
		login: builder.mutation<IUser, ILogin>({
			query: formData => ({
				body: formData,
				url: '/auth/login',
				method: 'POST',
			}),
			invalidatesTags: () => [
				{
					type: 'Auth',
				},
			],
		}),
		register: builder.mutation({
			query: formData => ({
				body: formData,
				url: '/auth/register',
				method: 'POST',
			}),
			invalidatesTags: () => [
				{
					type: 'Auth',
				},
			],
		}),
	}),
})

export const { useLoginMutation, useRegisterMutation } = authApi
