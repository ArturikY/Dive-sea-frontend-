import { ChangeEvent, FC } from 'react'
import axios from '../../../../../axios'
import { IRegisterFile } from './RegisterFile.interface'
import styles from './RegisterFile.module.scss'

export const RegisterFile: FC<IRegisterFile> = ({ image, setImage }) => {
	const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
		try {
			const formData = new FormData()
			if (e.target.files) {
				const file = e.target.files[0]
				formData.append('image', file)
				const { data } = await axios.post('/upload', formData)
				console.log(data)
				setImage(data.url)
			}
		} catch (err) {
			console.warn('Error for download file', err)
		}
	}

	return (
		<section className={styles['register-file']}>
			<div className={styles['avatar-input']}>
				<div className={styles.preview}>
					{image ? (
						<img src={image} width={100} className={styles.image} alt='file' />
					) : (
						<img src='/public/layout/user.png' width={100} alt='avatar' />
					)}
				</div>
				<input
					type='file'
					accept='.jpg, .png, .jpeg, .webp, .mp4, .mp3'
					onChange={handleChangeFile}
				/>
			</div>
		</section>
	)
}
