import { FC } from 'react'
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
	return (
		<section className={styles.footer}>
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles['top-section']}>
						<div className={styles.logo}>
							<img src='/public/layout/logo-light.png' alt='Footer logo' />
							<h4>DiveSea</h4>
						</div>
						<nav>
							<ul className={styles.navigation}>
								<li>
									<Link to={'/'} className={styles.link}>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link to={'/'} className={styles.link}>
										Term & Conditions
									</Link>
								</li>
								<li>
									<Link to={'/'} className={styles.link}>
										About Us
									</Link>
								</li>
								<li>
									<Link to={'/'} className={styles.link}>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<hr className={styles.line} />
					<div className={styles['bottom-section']}>
						<p>&#169; 2023 EATLY All Rights Reserved.</p>
						<nav>
							<ul className={styles['social-links']}>
								<li>
									<Link to={'/'} className={styles.link}>
										<AiOutlineInstagram />
									</Link>
								</li>
								<li>
									<Link to={'/'} className={styles.link}>
										<AiOutlineLinkedin />
									</Link>
								</li>
								<li>
									<Link to={'/'} className={styles.link}>
										<AiOutlineFacebook />
									</Link>
								</li>
								<li>
									<Link to={'/'} className={styles.link}>
										<AiOutlineTwitter />
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	)
}
