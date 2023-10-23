import { FC } from 'react'
import styles from './Marketplace.module.scss'
import { MarketplaceItem } from './marketplace-item/MarketplaceItem'
import { Header } from '../../layout/header/Header'
import { Footer } from '../../layout/footer/Footer'

export const Marketplace: FC = () => {
	window.scrollTo(0, 0)
	return (
		<div className={styles.marketplace}>
			<Header isHome={false} isMarketplace={true} isSell={false} />
			<MarketplaceItem
				title={'Discover NFTs'}
				isBigMargin={true}
				isLink={false}
				isPagination={false}
				isLimit={false}
			/>
			<Footer />
		</div>
	)
}
