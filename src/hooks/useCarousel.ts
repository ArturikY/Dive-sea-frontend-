import { useTypedSelector } from './useTypedSelector'

export const useCarousel = () => {
	const carousel = useTypedSelector(state => state.carousel)

	return carousel
}
