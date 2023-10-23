import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { carouselSlice } from '../store/carousel/carousel.slice'

export const useCarouselActions = () => {
	const dispatch = useDispatch()

	return useMemo(
		() => bindActionCreators(carouselSlice.actions, dispatch),
		[dispatch]
	)
}
