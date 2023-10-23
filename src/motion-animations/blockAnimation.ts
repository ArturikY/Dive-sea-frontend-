export const blockAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: any) => ({
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			delay: custom,
		},
	}),
}
