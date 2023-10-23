import { motion } from 'framer-motion'
import { FC } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { imageAnimation } from '../../../../motion-animations/imageAnimation'
import { textAnimation } from '../../../../motion-animations/textAnimation'
import styles from './Unleash.module.scss'

export const Unleash: FC = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			className={styles.unleash}
		>
			<div className='main__container'>
				<hr className={styles.line} />
				<div className={styles.content}>
					<motion.div
						custom={0.7}
						variants={textAnimation}
						className={styles.text}
					>
						<h2>
							Just Unleash - <b>Your Inner Collector</b>
						</h2>
						<div className={styles['list-advantages']}>
							<div className={styles.advantage}>
								<div className={styles.icon}>
									<TiTick />
								</div>
								<p>Best Seller All Around World</p>
							</div>
							<div className={styles.advantage}>
								<div className={styles.icon}>
									<TiTick />
								</div>
								<p>$2M+ Transections Every Day</p>
							</div>
							<div className={styles.advantage}>
								<div className={styles.icon}>
									<TiTick />
								</div>
								<p>Secure Transactions</p>
							</div>
							<div className={styles.advantage}>
								<div className={styles.icon}>
									<TiTick />
								</div>
								<p>Exclusive Collections From Sellers</p>
							</div>
							<div className={styles.advantage}>
								<div className={styles.icon}>
									<TiTick />
								</div>
								<p>Easy Buying and Selling</p>
							</div>
							<div className={styles.advantage}>
								<div className={styles.icon}>
									<TiTick />
								</div>
								<p>Join Our Community</p>
							</div>
						</div>
						<Link
							to={window.localStorage.getItem('token') ? '/sell' : '/login'}
							className={styles.link}
						>
							<p>Explore More</p>
							<div className={styles.icon}>
								<BsArrowRightShort />
							</div>
						</Link>
					</motion.div>
					<motion.img
						custom={0.8}
						variants={imageAnimation}
						src='/public/layout/unleash.png'
						alt='Unleash'
					/>
				</div>
			</div>
		</motion.section>
	)
}
