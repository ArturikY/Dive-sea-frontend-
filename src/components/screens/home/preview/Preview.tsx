import { FC } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './Preview.module.scss'
import { textAnimation } from '../../../../motion-animations/textAnimation'
import { imageAnimation } from '../../../../motion-animations/imageAnimation'

export const Preview: FC = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			className={styles.preview}
		>
			<div className='main__container'>
				<div className={styles.content}>
					<motion.div
						variants={textAnimation}
						custom={0.2}
						className={styles.text}
					>
						<hr className={styles.line} />
						<h1>Discover And Create NFTs</h1>
						<main>
							Discover, Create and Sell NFTs On Our NFT Marketplace With Over
							Thousands Of NFTs And Get a <b>$20 bonus.</b>
						</main>
						<div className={styles.buttons}>
							<Link to={'/'} className={styles['btn-link']}>
								<span>Explore More</span>
							</Link>
							<Link to={'/sell'} className={styles['btn-link-outline']}>
								<span>create NFT</span>
							</Link>
						</div>
						<div className={styles.avards}>
							<div className={styles.avard}>
								<h3>430K+</h3>
								<div className={styles.avard_desc}>Art Works</div>
							</div>
							<div className={styles.avard}>
								<h3>159K+</h3>
								<div className={styles.avard_desc}>Creators</div>
							</div>
							<div className={styles.avard}>
								<h3>87K+</h3>
								<div className={styles.avard_desc}>Collections</div>
							</div>
						</div>
					</motion.div>
					<motion.img
						variants={imageAnimation}
						custom={0.2}
						src='/public/layout/preview.png'
						alt='Wow'
						className={styles.image}
					/>
				</div>
			</div>
		</motion.section>
	)
}
