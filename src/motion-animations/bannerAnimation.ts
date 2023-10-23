interface ICustom {
	duration: number
	delay: number
}

export const bannerAnimation = {
	hidden: {
		x: -300,
		opacity: 0,
	},

	visible: (custom: ICustom) => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: custom.duration,
			delay: custom.delay,
		},
	}),
}
