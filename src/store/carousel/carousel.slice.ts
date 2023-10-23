import { createSlice } from '@reduxjs/toolkit'
import ICarousel from './carousel.interface'
import { itemsData } from './items.data'

const initialState: ICarousel = {
	currentId: 1,
	items: itemsData,
}

export const carouselSlice = createSlice({
	name: 'Carousel',
	initialState,
	reducers: {
		nextSlide: state => {
			const nextId = state.currentId + 1
			const isNextItem = state.items.some(item => item.id === nextId)

			if (!isNextItem) return
			state.currentId = nextId
		},
		prevSlide: state => {
			const prevId = state.currentId - 1
			if (!prevId) return

			const isPrevItem = state.items.some(item => item.id === prevId)
			if (!isPrevItem) return

			state.currentId = prevId
		},
	},
})
