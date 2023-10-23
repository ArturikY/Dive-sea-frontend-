import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	// Получаем store - favorites из combineReducers
	const cart = useTypedSelector(state => state.cart)

	return cart
}
