import { FC } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProductDetail.module.scss'
import { ProductDetailItem } from './product-detail-item/ProductDetailItem'
import { Recommendations } from './recommendations/Recommendations'
import { Header } from '../../layout/header/Header'
import { Footer } from '../../layout/footer/Footer'
import { useGetProductQuery } from '../../../store/api/marketplace.api'

export const ProductDetail: FC = () => {
	window.scrollTo(0, 0)

	const { id } = useParams()

	const { data: product, isSuccess } = useGetProductQuery(id)

	if (!isSuccess) return <h2>Loading...</h2>

	return (
		<div className={styles['product-detail']}>
			<Header isHome={false} isMarketplace={true} isSell={false} />
			<ProductDetailItem product={product} />
			<Recommendations />
			<Footer />
		</div>
	)
}
