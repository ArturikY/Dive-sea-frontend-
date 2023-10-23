import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import axios from '../../../../axios'
import { IUser } from '../../../../types/user.interface'
import { ILogin } from './Login.interface'
import styles from './Login.module.scss'

export const Login: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>()
	const [resError, setResError] = useState<boolean>(false)

	const sendForm = async (formData: ILogin) => {
		setResError(false)
		try {
			const { data } = await axios.post<IUser>('/auth/login', formData)

			if ('token' in data) {
				window.localStorage.setItem('token', data.token)
			} else {
				console.warn('Failed to login')
			}
		} catch (err) {
			setResError(true)
			console.warn('Failed to login', err)
		}
	}

	if (window.localStorage.getItem('token')) {
		return <Navigate to='/' />
	}

	return (
		<section className={styles.login}>
			<div className='main__container'>
				<div className={styles.head}>
					<Link to={'/'}>
						<img src='/public/layout/logo-dark.png' alt='Logo' />
					</Link>
					<Link to={'/register'} className={styles['register-link']}>
						<span>Sign Up</span>
					</Link>
				</div>
				<div className={styles.content}>
					<h1>Sign In</h1>
					<form action='#' onSubmit={handleSubmit(sendForm)}>
						<div className={styles.input}>
							{errors?.nickname ? (
								<label style={{ color: '#e63946' }}>
									Nickname is required!
								</label>
							) : resError ? (
								<label style={{ color: '#e63946' }}>
									Invalid nickname or password!
								</label>
							) : (
								<label>Nickname</label>
							)}
							<input
								type='text'
								placeholder='Your nickname'
								className={styles['text-input']}
								{...register('nickname', { required: true })}
							/>
						</div>
						<div className={styles.input}>
							{errors?.password ? (
								<label style={{ color: '#e63946' }}>
									Password is required!
								</label>
							) : (
								<label>Password</label>
							)}
							<input
								type='text'
								placeholder='Your password'
								className={styles['text-input']}
								{...register('password', { required: true })}
							/>
						</div>
						{/* Link */}
						<div className={styles.btn}>
							<button>
								<span>Sign In</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
