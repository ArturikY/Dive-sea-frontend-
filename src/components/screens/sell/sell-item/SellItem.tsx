import { Switch } from '@mui/material'
import { FC } from 'react'
import styles from './SellItem.module.scss'
import { motion } from 'framer-motion'
import { textAnimation } from '../../../../motion-animations/textAnimation'
import { ISellItem } from './SellItem.interface'

export const SellItem: FC<ISellItem> = ({ register, errors }) => {
	return (
		<motion.div
			custom={0.2}
			variants={textAnimation}
			className={styles['sell-item']}
		>
			<div className={styles.input}>
				{errors?.name ? (
					<label style={{ color: '#e63946' }}>Name is required!</label>
				) : (
					<label>Name</label>
				)}
				<input
					type='text'
					placeholder='ArtWork Name'
					className={styles['text-input']}
					{...register('name', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.description ? (
					<label style={{ color: '#e63946' }}>Description is required!</label>
				) : (
					<label>Description</label>
				)}
				<textarea
					placeholder='Enter Your Description'
					{...register('description', { required: true })}
				/>
			</div>
			<div className={styles['group-inputs']}>
				<div className={styles['price-input']}>
					{errors?.price ? (
						<label style={{ color: '#e63946' }}>Price is required!</label>
					) : (
						<label>Price</label>
					)}
					<input
						type='text'
						placeholder='0.75 ETC'
						className={styles['text-input']}
						{...register('price', { required: true })}
					/>
				</div>
				<div className={styles['size-input']}>
					{errors?.size ? (
						<label style={{ color: '#e63946' }}>Size is required!</label>
					) : (
						<label>Size</label>
					)}
					<input
						type='text'
						placeholder='Ex - 100 x 100'
						className={styles['text-input']}
						{...register('size', { required: true })}
					/>
				</div>
			</div>
			<div className={styles.switch}>
				<div className={styles.text}>
					<h4>Put On Sale</h4>
					<p>People Will Bids On Your NFT Project</p>
				</div>
				<Switch color='default' defaultChecked {...register('putOnSale')} />
			</div>
			<div className={styles.switch}>
				<div className={styles.text}>
					<h4>Direct Sale</h4>
					<p>No Bids - Only Direct Salling</p>
				</div>
				<Switch color='default' {...register('directSale')} />
			</div>
			<button className={styles.btn}>
				<span>Create</span>
			</button>
		</motion.div>
	)
}
