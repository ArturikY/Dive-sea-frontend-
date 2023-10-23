export interface IProduct {
	id: number
	author: {
		firstName: string
		lastName: string
		nickname: string
		avatar: string
	}
	name: string
	description: string
	price: number
	size: string
	image: string
	putOnSale: boolean
	directSale: boolean
	date: string
}
