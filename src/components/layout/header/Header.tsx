import clsx from 'clsx'
import { FC, useState } from 'react'
import { TbLogout } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
import { ModalWindow } from '../../ui/modal-window/ModalWindow'
import { IHeader } from './Header.interface'

export const Header: FC<IHeader> = ({ isHome, isMarketplace, isSell }) => {
	// States
	const [headerMini, setHeaderMini] = useState(false)
	const [openModal, setOpenModal] = useState(false)

	// Clsx
	const linkHomeClass = clsx('header__link', {
		active: isHome,
	})
	const linkMarketplaceClass = clsx('header__link', {
		active: isMarketplace,
	})
	const linkSellClass = clsx('header__link', {
		active: isSell,
		disabled: !window.localStorage.getItem('token'),
	})
	const linkCartClass = clsx('header__cart', {
		disabled: !window.localStorage.getItem('token'),
	})
	const linkLogoutClass = clsx('header__logout', {
		disabled: !window.localStorage.getItem('token'),
	})
	const linkLoginClass = clsx('header__login', {
		disabled: window.localStorage.getItem('token'),
	})
	const headerClass = clsx('header', {
		mini: headerMini,
	})

	// Functions
	const handleClickOpen = () => {
		setOpenModal(true)
	}
	const handleClose = () => {
		setOpenModal(false)
	}

	const navigate = useNavigate()
	const logout = () => {
		window.localStorage.removeItem('token')
		if (!window.localStorage.getItem('token')) {
			navigate('/login')
		}
	}

	// Logic
	window.addEventListener('scroll', () => {
		const scroll = window.scrollY
		if (scroll > 40) {
			setHeaderMini(true)
		} else {
			setHeaderMini(false)
		}
	})

	return (
		<>
			<header className={headerClass}>
				<div className='main__container'>
					<div className='header__content'>
						<div className='header__navigate'>
							<Link to={'/'}>
								<img src='/public/layout/logo-dark.png' alt='Site logo' />
							</Link>
							<nav>
								<ul>
									<li>
										<Link to={'/'} className={linkHomeClass}>
											Home
										</Link>
									</li>
									<li>
										<Link to={'/marketplace'} className={linkMarketplaceClass}>
											Marketplace
										</Link>
									</li>
									<li>
										<Link to={'/sell'} className={linkSellClass}>
											Sell
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className='header__buttons'>
							<button onClick={handleClickOpen} className={linkCartClass}>
								<span>Your Cart</span>
							</button>
							<button onClick={logout} className={linkLogoutClass}>
								<TbLogout />
							</button>
							<Link to={'/login'} className={linkLoginClass}>
								Sign In
							</Link>
						</div>
					</div>
				</div>
			</header>
			<ModalWindow open={openModal} handleClose={handleClose} />
		</>
	)
}
