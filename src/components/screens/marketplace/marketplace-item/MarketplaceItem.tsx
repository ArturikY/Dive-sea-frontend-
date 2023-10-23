import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { blockAnimation } from '../../../../motion-animations/blockAnimation'
import { useGetMarketplaceQuery } from '../../../../store/api/marketplace.api'
import { Product } from '../../../ui/product/Product'
import { IProduct } from '../../../ui/product/Product.interface'
import { SortingButtons } from '../sorting-buttons/SortingButtons'
import { IMarketplaceItem } from './MarketplaceItem.interface'
import styles from './MarketplaceItem.module.scss'

export const MarketplaceItem: FC<IMarketplaceItem> = ({
	title,
	isBigMargin,
	isLink,
}) => {
	const [conditionString, setConditionString] = useState('')

	const {
		data: marketplace,
		isLoading,
		isError,
	} = useGetMarketplaceQuery(conditionString)

	if (isLoading) {
		return <h1 className='server-notification'>Loading...</h1>
	}
	if (isError) {
		return <h1 className='server-notification'>Error!</h1>
	}
	if (!marketplace) {
		console.log(marketplace)
		return <h1 className='server-notification'>Don't have products</h1>
	}

	const titleClass = clsx('marketplace__title', {
		'big-margin': isBigMargin,
	})

	const linkClass = clsx('marketplace__link-container', {
		active: isLink,
	})

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			variants={blockAnimation}
			custom={0.3}
			className={styles['marketplace-item']}
		>
			<div className='main__container'>
				<div className={styles.content}>
					<h2 className={titleClass}>{title}</h2>
					<SortingButtons setConditionString={setConditionString} />
					<div className={styles['list-products']}>
						{marketplace.map((product: IProduct) => (
							<Product product={product} key={product.id} />
						))}
					</div>
					<div className={linkClass}>
						<Link to={'/marketplace'} className='link'>
							<div className='text'>Explore All</div>
							<div className='icon'>
								<HiArrowNarrowRight />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</motion.section>
	)
}
