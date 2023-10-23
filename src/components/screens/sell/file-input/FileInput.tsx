import { motion } from 'framer-motion'
import { ChangeEvent, FC } from 'react'
import axios from '../../../../axios'
import { imageAnimation } from '../../../../motion-animations/imageAnimation'
import { IFileInput } from './FileInput.interface'
import styles from './FileInput.module.scss'

export const FileInput: FC<IFileInput> = ({
	image,
	setImage,
	errors,
	register,
}) => {
	// const inputFileRef = useRef(null)

	const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
		try {
			const formData = new FormData()
			if (e.target.files) {
				const file = e.target.files[0]
				formData.append('image', file)
				const { data } = await axios.post('/upload', formData)
				setImage(data.url)
				console.log(data)
			}
		} catch (err) {
			console.warn('Error for download file', err)
		}
	}

	return (
		<motion.div
			custom={0.3}
			variants={imageAnimation}
			className={styles['file-inlput']}
		>
			<div className={styles.preview}>
				{image ? (
					<img
						src={`${process.env.REACT_APP_URL}${image}`}
						width={400}
						className={styles.image}
						alt='file'
					/>
				) : errors?.image ? (
					<div className={styles.preview__text}>
						<h2 style={{ color: '#e63946' }}>Image is required!</h2>
						<div className={styles.icon} />
						<p>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
					</div>
				) : (
					<div className={styles.preview__text}>
						<div className={styles.icon} />
						<p>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
					</div>
				)}
			</div>
			<div className={styles.content}>
				<input
					type='file'
					// ref={inputFileRef}
					{...register('image', { required: true })}
					onChange={handleChangeFile}
					accept='.jpg, .png, .jpeg, .webp, .mp4, .mp3'
					className={styles.input}
				/>
				<button className={styles.btn}>
					<span>Upload</span>
				</button>
			</div>
		</motion.div>
	)
}
