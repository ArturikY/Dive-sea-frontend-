import { FC } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import { useTypedSelector } from '../../../../../hooks/useTypedSelector'
import styles from './Carousel.module.scss'
import { CarouselItem } from './carousel-item/CarouselItem'
import { useCarouselActions } from '../../../../../hooks/useCarouselActions'
import { IProduct } from '../../../../ui/product/Product.interface'
import { ProductMedium } from '../../../../ui/product/product-medium/ProductMedium'

export const Carousel: FC = () => {
	const { items } = useTypedSelector(state => state.carousel)

	// const { prevSlide, nextSlide } = useCarouselActions()

	return (
		<div className={styles.carousel}>
			<div className={styles.content}>
				{items.map((item: IProduct) => (
					<ProductMedium key={item.id} product={item} />
				))}
			</div>
			{/* <div className={styles.buttons}>
				<button onClick={() => prevSlide()}>
					<div className={styles.icon}>
						<BsArrowLeft />
					</div>
				</button>
				<hr />
				<button onClick={() => nextSlide()}>
					<div className={styles.icon}>
						<BsArrowRight />
					</div>
				</button>
			</div> */}
		</div>
	)
}
