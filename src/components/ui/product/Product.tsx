import { FC } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../../hooks/useCart'
import { useCartActions } from '../../../hooks/useCartActions'
import { IMarketplace } from '../../screens/marketplace/Marketplace.interface'
import styles from './Product.module.scss'

export const Product: FC<IMarketplace> = ({ product }) => {
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
		<div className={styles['product-container']}>
			<Link to={`/marketplace/${product.id}`} className={styles.product}>
				<img src={product.image} alt={product.name} />
				<h4>{product.name}</h4>
				<div className={styles.content}>
					<div className={styles['text-info']}>
						<p>Current bid</p>
						<div className={styles.price}>
							<div className={styles.icon} />
							<h5>{product.price}</h5>
						</div>
					</div>
				</div>
			</Link>
			<button onClick={handleCart} className={styles['btn-to-cart']}>
				<span>{isExist ? 'Remove' : 'To Cart'}</span>
			</button>
		</div>
	)
}
