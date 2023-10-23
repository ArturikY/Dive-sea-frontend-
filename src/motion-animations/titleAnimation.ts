export const titleAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: (custom: any) => ({
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: custom,
		},
	}),
}
