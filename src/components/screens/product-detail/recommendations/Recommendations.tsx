import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from './Recommendations.module.scss'
import { useGetMarketplaceQuery } from '../../../../store/api/marketplace.api'
import { blockAnimation } from '../../../../motion-animations/blockAnimation'
import { IProduct } from '../../../ui/product/Product.interface'
import { ProductMedium } from '../../../ui/product/product-medium/ProductMedium'

export const Recommendations: FC = () => {
	const { data: recommendations, isLoading } =
		useGetMarketplaceQuery('?limit=5')

	console.log(recommendations)

	if (!recommendations) {
		return <h1 className='server-notification'>Don't have recommendations</h1>
	}
	if (isLoading) {
		;<h1 className='server-notification'>Loading...</h1>
	}

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			custom={0.4}
			variants={blockAnimation}
			className={styles.recommendations}
		>
			<div className='main__container'>
				<h2>Another NFTs</h2>
				<div className={styles['list-nfts']}>
					{recommendations?.map((product: IProduct) => (
						<ProductMedium product={product} key={product.id} />
					))}
				</div>
			</div>
		</motion.section>
	)
}
