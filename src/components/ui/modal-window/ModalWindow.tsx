import { Dialog } from '@mui/material'
import clsx from 'clsx'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheckCircle } from 'react-icons/fi'
import { useCart } from '../../../hooks/useCart'
import { useCartActions } from '../../../hooks/useCartActions'
import { ICart } from '../../../types/cart.interface'
import { ProductMini } from '../product/product-mini/ProductMini'
import { IModalWindow } from './ModalWindow.interface'
import styles from './ModalWindow.module.scss'

export const ModalWindow: FC<IModalWindow> = ({ open, handleClose }) => {
	const cart = useCart()
	const { removeFromCart } = useCartActions()

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<ICart>()

	const [alert, setAlert] = useState(false)

	const alertClass = clsx('alert', {
		show: alert,
	})

	const submitForm = (data: ICart) => {
		if (cart.length !== 0) {
			setAlert(true)

			setTimeout(() => {
				setAlert(false)
				for (const product of cart) {
					removeFromCart(product)
				}
			}, 3000)

			reset()
		}
	}

	return (
		<Dialog onClose={handleClose} open={open} className={styles.dialog}>
			<div className={styles.cart}>
				<h2>Your Cart</h2>
				{alert ? (
					<div className={alertClass}>
						<div className='alert__icon'>
							<FiCheckCircle />
						</div>
						<p>Your bid has been successfully submitted</p>
					</div>
				) : null}
				<div className={styles['list-nfts']}>
					{cart.length !== 0 ? (
						cart.map(product => (
							<ProductMini product={product} key={product.id} />
						))
					) : (
						<h3 style={{ textAlign: 'center' }}>Cart don't have products</h3>
					)}
				</div>
				<form
					action='#'
					className={styles.form}
					onSubmit={handleSubmit(submitForm)}
				>
					{errors?.bid?.type === 'required' ? (
						<h3 style={{ color: '#e63946' }}>Choose Your Bid</h3>
					) : errors?.bid?.type === 'pattern' ? (
						<h3 style={{ color: '#e63946' }}>
							The bid must not contain letters
						</h3>
					) : (
						<h3>Your Bid</h3>
					)}
					<div className={styles['form-input']}>
						<div className={styles.label}>
							<label>ETH</label>
						</div>
						<input
							type='text'
							className={styles.input}
							{...register('bid', {
								required: true,
								pattern: /^[0-9]*[.]?[0-9]*$/,
							})}
						/>
					</div>
					<button>
						<span>
							<div className={styles.icon} />
							<p>Submit</p>
						</span>
					</button>
				</form>
			</div>
		</Dialog>
	)
}
