import { FC } from 'react'

import { motion } from 'framer-motion'
import { useGetCollectionQuery } from '../../../../store/api/collection.api'
import { ICollection } from './Collection.interface'
import styles from './Collection.module.scss'
import { CollectionItem } from './collection-item/CollectionItem'
import { blockAnimation } from '../../../../motion-animations/blockAnimation'

export const Collection: FC = () => {
	const { data: collection, isLoading, isError } = useGetCollectionQuery(null)

	if (isLoading) {
		return <h1 className='server-notification'>Loading...</h1>
	}
	if (isError) {
		return <h1 className='server-notification'>Error!</h1>
	}
	if (!collection) {
		return <h1 className='server-notification'>Don't have collection</h1>
	}

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			variants={blockAnimation}
			custom={0.3}
			className={styles.collection}
		>
			<div className='main__container'>
				<div className={styles.content}>
					<h2>Top Collection</h2>
					<div className={styles.head}>
						<p className={styles.title}>Collection</p>
						<div className={styles.another}>
							<p>Volume</p>
							<p>24h %</p>
							<p className={styles.price}>Floor Price</p>
							<p className={styles.owners}>Owners</p>
							<p className={styles.items}>Items</p>
						</div>
					</div>
					<div className={styles['list-collection']}>
						{collection.map((collection: ICollection) => (
							<div key={collection.id}>
								<CollectionItem collection={collection} />
								<hr className={styles.line} />
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	)
}
