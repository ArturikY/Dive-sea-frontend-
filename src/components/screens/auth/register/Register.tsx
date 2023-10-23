import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import axios from '../../../../axios'
import { IUser } from '../../../../types/user.interface'
import { IRegister } from './Register.interface'
import styles from './Register.module.scss'
import { RegisterFile } from './register-file/RegisterFile'
import { RegisterInputs } from './register-inputs/RegisterInputs'

export const Register: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegister>()
	const [image, setImage] = useState<string>('')

	const sendForm = async (formData: IRegister) => {
		const fields: IRegister = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			nickname: formData.nickname,
			password: formData.password,
			avatar: image,
		}

		try {
			const { data } = await axios.post<IUser>('/auth/register', fields)

			if ('token' in data) {
				window.localStorage.setItem('token', data.token)
			} else {
				console.warn('Failed to registration')
			}
		} catch (err) {
			console.warn('Failed to registration', err)
		}
	}

	if (window.localStorage.getItem('token')) {
		return <Navigate to='/' />
	}

	return (
		<section className={styles.register}>
			<div className='main__container'>
				<div className={styles.head}>
					<Link to={'/'}>
						<img src='/public/layout/logo-dark.png' alt='Logo' />
					</Link>
					<Link to={'/login'} className={styles['register-link']}>
						<span>Sign In</span>
					</Link>
				</div>
				<div className={styles.content}>
					<h1>Sign Up</h1>
					<form action='#' onSubmit={handleSubmit(sendForm)}>
						<RegisterFile image={image} setImage={setImage} />
						<RegisterInputs register={register} errors={errors} />
						<div className={styles.btn}>
							<button>
								<span>Sign Up</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
