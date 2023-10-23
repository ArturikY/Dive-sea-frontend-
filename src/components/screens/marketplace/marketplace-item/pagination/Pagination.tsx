import clsx from 'clsx'
import { FC } from 'react'
import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight,
} from 'react-icons/hi'
import { IPagination } from './Pagination.interface'

export const Pagination: FC<IPagination> = ({
	isExist,
	setConditionString,
}) => {
	const paginationClass = clsx('pagination', {
		active: isExist,
	})

	return (
		<section className={paginationClass}>
			<button
				className='pagination__btn'
				onClick={() => setPage(prev => prev - 1)}
				disabled={!page}
			>
				<div className='pagination__icon'>
					<HiOutlineArrowNarrowLeft />
				</div>
				<p>Prev</p>
			</button>
			<button
				className='pagination__btn'
				onClick={() => setPage(prev => prev + 1)}
			>
				<p>Next</p>
				<div className='pagination__icon'>
					<HiOutlineArrowNarrowRight />
				</div>
			</button>
		</section>
	)
}
