import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IRegister } from '../Register.interface'

export interface IRegisterInputs {
	register: UseFormRegister<IRegister>
	errors: FieldErrors<IRegister>
}
