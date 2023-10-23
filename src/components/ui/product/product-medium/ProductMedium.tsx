import { FC } from 'react'
import { IProductMedium } from './ProductMedium.interface'
import styles from './ProductMedium.module.scss'
import { Link } from 'react-router-dom'

export const ProductMedium: FC<IProductMedium> = ({ product }) => {
	return (
		<Link
			to={`/marketplace/${product.id}`}
			className={styles['product-medium']}
		>
			<img src={product.image} alt={product.name} />
			{/* <p className={styles.author}>{product.author.nickname}</p> */}
			<h3>{product.name}</h3>
			<div className={styles.foot}>
				<div className={styles.price}>
					<div className={styles.icon} />
					<h4>{product.price}</h4>
				</div>
				<p className={styles.date}>{product.date.split('-')[0]}</p>
			</div>
		</Link>
	)
}
