import { FC } from 'react'
import { ICollectionItem } from './CollectionItem.interface'
import styles from './CollectionItem.module.scss'

export const CollectionItem: FC<ICollectionItem> = ({ collection }) => {
	return (
		<div className={styles['collection-item']}>
			<div className={styles.author}>
				<img src={collection.avatar} alt={collection.nickname} />
				<div className={styles['text-info']}>
					<h4>{collection.fullName}</h4>
					<p>By {collection.nickname}</p>
				</div>
			</div>
			<div className={styles.info}>
				<div className={styles.volume}>
					<div className={styles.icon}></div>
					<p>{collection.volume}</p>
				</div>
				<div className={styles.percent}>+{collection.percent}%</div>
				<div className={styles.price}>
					<div className={styles.icon}></div>
					<p>{collection.price}</p>
				</div>
				<div className={styles.owners}>{collection.owners}K</div>
				<div className={styles.items}>{collection.items}</div>
			</div>
		</div>
	)
}
