import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IProduct } from '../../../ui/product/Product.interface'

export interface IFileInput {
	register: UseFormRegister<IProduct>
	errors: FieldErrors<IProduct>
	image: string
	setImage: React.Dispatch<React.SetStateAction<string>>
}
