import { FC } from 'react'
import { transformDate } from '../../../../utils/transformDate'
import { IProductMini } from './ProductMini.interface'
import styles from './ProductMini.module.scss'

export const ProductMini: FC<IProductMini> = ({ product }) => {
	return (
		<div className={styles['product-mini']}>
			<div className={styles.content}>
				<div className={styles.info}>
					<img src={product.image} alt={product.name} />
					<div className={styles.text}>
						<h4>{product.name}</h4>
						<p className={styles.date}>{transformDate(product.date)}</p>
					</div>
				</div>
				<div className={styles.price}>
					<div className={styles.icon} />
					<p>{product.price}</p>
				</div>
			</div>
		</div>
	)
}
