import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cartSlice } from '../store/cart.slice'

export const useCartActions = () => {
	const dispatch = useDispatch()

	return useMemo(
		() => bindActionCreators(cartSlice.actions, dispatch),
		[dispatch]
	)
}
