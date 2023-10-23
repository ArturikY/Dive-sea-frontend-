import { motion } from 'framer-motion'
import { ChangeEvent, FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../../../axios'
import { titleAnimation } from '../../../motion-animations/titleAnimation'
import { IRequestProduct } from '../../../types/requestProduct.interface'
import { Footer } from '../../layout/footer/Footer'
import { Header } from '../../layout/header/Header'
import { IProduct } from '../../ui/product/Product.interface'
import styles from './Sell.module.scss'
import { FileInput } from './file-input/FileInput'
import { SellItem } from './sell-item/SellItem'
import { useNavigate } from 'react-router-dom'
import { useCreateProductMutation } from '../../../store/api/marketplace.api'

export const Sell: FC = () => {
	window.scrollTo(0, 0)

	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProduct>()
	const [image, setImage] = useState<string>('')
	const [createProductMutation] = useCreateProductMutation()

	const createProduct = async (data: IProduct) => {
		const newProduct: IRequestProduct = {
			name: data.name,
			description: data.description,
			price: data.price,
			size: data.size,
			image: image,
			putOnSale: data.putOnSale,
			directSale: data.directSale,
		}
		console.log(newProduct)

		try {
			const { data } = await axios.post<IProduct>('/products', newProduct)
			console.log(data)

			const productId = data.id
			navigate(`/marketplace/${productId}`)
		} catch (err) {
			console.warn(err)
		}
	}

	return (
		<>
			<Header isHome={false} isMarketplace={false} isSell={true} />
			<motion.section
				initial='hidden'
				whileInView='visible'
				className={styles.sell}
			>
				<div className='main__container'>
					<motion.h1 custom={0.2} variants={titleAnimation}>
						Create Your NFT
					</motion.h1>
					{window.localStorage.getItem('token') ? (
						<form
							action='#'
							className={styles.form}
							onSubmit={handleSubmit(createProduct)}
						>
							<SellItem register={register} errors={errors} />
							<FileInput
								register={register}
								errors={errors}
								image={image}
								setImage={setImage}
							/>
						</form>
					) : (
						<motion.h2
							custom={0.3}
							variants={titleAnimation}
							className={styles['not-access']}
						>
							For create NFTs, you need a sing in
						</motion.h2>
					)}
				</div>
			</motion.section>
			<Footer />
		</>
	)
}
