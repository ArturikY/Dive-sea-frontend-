import { FC } from 'react'
import { BiSolidDollarCircle, BiSortDown } from 'react-icons/bi'
import { ISortingButtons } from './SortingButtons.interface'
import styles from './SortingButtons.module.scss'

export const SortingButtons: FC<ISortingButtons> = ({ setConditionString }) => {
	return (
		<div className={styles['sorting-buttons']}>
			<button
				onClick={() => setConditionString('')}
				className={styles.btn}
				style={{ padding: '16px 24px' }}
			>
				<span>
					<p>All</p>
				</span>
			</button>
			<button
				onClick={() => setConditionString('?order=asc')}
				className={styles.btn}
			>
				<span>
					<div className={styles.icon} style={{ paddingTop: '2px' }}>
						<BiSortDown />
					</div>
					<p>Low Price</p>
				</span>
			</button>
			<button
				onClick={() => setConditionString('?_order=desc')}
				className={styles.btn}
			>
				<span>
					<div className={styles.icon}>
						<BiSolidDollarCircle />
					</div>
					<p>High Price</p>
				</span>
			</button>
		</div>
	)
}
