import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IProduct } from '../../../ui/product/Product.interface'

export interface ISellItem {
	register: UseFormRegister<IProduct>
	errors: FieldErrors<IProduct>
}
