export const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: any) => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: custom,
		},
	}),
}
