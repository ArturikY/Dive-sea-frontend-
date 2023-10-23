import { FC } from 'react'

import { Footer } from '../../layout/footer/Footer'
import { Header } from '../../layout/header/Header'
import { MarketplaceItem } from '../marketplace/marketplace-item/MarketplaceItem'
import styles from './Home.module.scss'
import { Banner } from './banner/Banner'
import { Collection } from './collection/Collection'
import { Preview } from './preview/Preview'
import { Unleash } from './unleash/Unleash'

export const Home: FC = () => {
	window.scrollTo(0, 0)
	return (
		<section className={styles.home}>
			<Header isHome={true} isMarketplace={false} isSell={false} />
			<Preview />
			<Collection />
			<MarketplaceItem
				title='Explore Marketplace'
				isBigMargin={false}
				isLink={true}
				isPagination={false}
				isLimit={true}
			/>
			<Unleash />
			<Banner />
			<Footer />
		</section>
	)
}
