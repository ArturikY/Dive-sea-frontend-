import { FC } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { bannerAnimation } from '../../../../motion-animations/bannerAnimation'
import styles from './Banner.module.scss'

export const Banner: FC = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			className={styles.banner}
		>
			<div className='main__container'>
				<motion.div
					custom={{ duration: 1.2, delay: 0.7 }}
					variants={bannerAnimation}
					className={styles.content}
				>
					<div className={styles.text}>
						<h2>Create and Sell NFTs</h2>
						<p>World's Largest NFT Place</p>
						<div className={styles.buttons}>
							<Link to={'/marketplace'} className={styles['btn-link']}>
								Explore More
							</Link>
							<Link
								to={window.localStorage.getItem('token') ? '/sell' : '/login'}
								className={styles['btn-link-outline']}
							>
								Sell Artwork
							</Link>
						</div>
					</div>
					<img src='/public/layout/banner.png' alt='Banner' />
				</motion.div>
			</div>
		</motion.section>
	)
}
