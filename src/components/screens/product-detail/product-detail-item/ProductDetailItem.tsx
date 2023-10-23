import { motion } from 'framer-motion'
import { FC } from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../../../hooks/useCart'
import { useCartActions } from '../../../../hooks/useCartActions'
import { IProductDetailItem } from './ProductDetailItem.interface'
import styles from './ProductDetailItem.module.scss'
import { bannerAnimation } from '../../../../motion-animations/bannerAnimation'
import { transformDate } from '../../../../utils/transformDate'

export const ProductDetailItem: FC<IProductDetailItem> = ({ product }) => {
	const cart = useCart()
	const { addToCart, removeFromCart } = useCartActions()
	const navigate = useNavigate()

	const isExist = cart.some(prod => prod.id === product.id)

	const handleCart = () => {
		if (window.localStorage.getItem('token')) {
			if (isExist) {
				removeFromCart(product)
			} else {
				addToCart(product)
			}
		} else {
			navigate('/login')
		}
	}

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			className={styles['product-detail-item']}
		>
			<div className='main__container'>
				<motion.div
					custom={{ duration: 0.8, delay: 0.2 }}
					variants={bannerAnimation}
					className={styles.head}
				>
					<Link to={'/marketplace'} className={styles.icon}>
						<GrFormPrevious />
					</Link>
					<h2>Product Detail</h2>
				</motion.div>
				<motion.div
					custom={{ duration: 0.8, delay: 0.2 }}
					variants={bannerAnimation}
					className={styles.content}
				>
					<img
						src={product.image}
						alt={product.name}
						className={styles.image}
					/>
					<div className={styles.text}>
						<h1>{product.name}</h1>
						<main>{product.description}</main>
						<div className={styles.author}>
							<img src={product.author.avatar} alt={product.author.nickname} />
							<div className={styles.info}>
								<p>Created by</p>
								<h4>{product.author.nickname}</h4>
							</div>
						</div>
						<div className={styles['for-cart']}>
							<div className={styles.price}>
								<p>Current Bid</p>
								<div className={styles.bid}>
									<div className={styles.icon} />
									<p>{product.price}</p>
								</div>
							</div>
							<div className={styles.date}>
								<p>Created at</p>
								<h5>{transformDate(product.date)}</h5>
							</div>
						</div>
						<div className={styles['btn-container']}>
							<button onClick={handleCart} className={styles.btn}>
								<span>{isExist ? 'Remove from' : 'Add to'} Cart</span>
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	)
}
