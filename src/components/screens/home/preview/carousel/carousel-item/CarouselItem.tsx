import { FC } from 'react'
import { useCarousel } from '../../../../../../hooks/useCarousel'
import { IProduct } from '../../../../../ui/product/Product.interface'

export const CarouselItem: FC<{ item: IProduct }> = ({ item }) => {
	const { currentId } = useCarousel()

	const isActive: boolean = currentId === item.id

	return <></>
}
