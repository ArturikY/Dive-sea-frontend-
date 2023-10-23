import { FC } from 'react'
import styles from './RegisterInputs.module.scss'
import { IRegisterInputs } from './RegisterInputs.interface'

export const RegisterInputs: FC<IRegisterInputs> = ({ errors, register }) => {
	return (
		<section className={styles['register-inputs']}>
			<div className={styles['input-group']}>
				<div className={styles.input}>
					{errors?.firstName ? (
						<label style={{ color: '#e63946' }}>First name is required!</label>
					) : (
						<label>First name</label>
					)}
					<input
						type='text'
						placeholder='Your first name'
						{...register('firstName', { required: true })}
					/>
				</div>
				<div className={styles.input}>
					{errors?.lastName ? (
						<label style={{ color: '#e63946' }}>Last name is required!</label>
					) : (
						<label>Last name</label>
					)}
					<input
						type='text'
						placeholder='Your last name'
						{...register('lastName', { required: true })}
					/>
				</div>
			</div>
			<div className={styles['input-group']}>
				<div className={styles.input}>
					{errors?.nickname ? (
						<label style={{ color: '#e63946' }}>Nickname is required!</label>
					) : (
						<label>Nickname</label>
					)}
					<input
						type='text'
						placeholder='Your nickname'
						{...register('nickname', { required: true })}
					/>
				</div>
				<div className={styles.input}>
					{errors?.password ? (
						<label style={{ color: '#e63946' }}>Password is required!</label>
					) : (
						<label>Password</label>
					)}
					<input
						type='text'
						placeholder='Your password'
						{...register('password', { required: true })}
					/>
				</div>
			</div>
		</section>
	)
}
