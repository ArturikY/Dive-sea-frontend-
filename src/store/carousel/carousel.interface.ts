import { IProduct } from '../../components/ui/product/Product.interface'

export interface ICarousel {
	currentId: number
	items: IProduct[]
}
