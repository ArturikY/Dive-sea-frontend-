import { IProduct } from '../../components/ui/product/Product.interface'

export const itemsData: IProduct[] = [
	{
		id: 1,
		author: {
			firstName: 'Alex',
			lastName: 'Carting',
			nickname: 'Alex',
			avatar: '/public/collection/alex.png',
		},
		name: 'Sun-Glass',
		description:
			'Introducing the latest addition to the NFT world, a stunning glass NFT that is truly one-of-a-kind. Every angle of this NFT offers a unique and captivating experience, as the light refracts and dances across.',
		price: 1.75,
		size: '1000x1000',
		image: '/public/products/sun-glass.png',
		putOnSale: true,
		directSale: false,
		date: 'May 17, 2022 at 12:08',
	},
	{
		id: 2,
		author: {
			firstName: 'Michael',
			lastName: 'Balak',
			nickname: 'Michao',
			avatar: '/public/collection/michael.png',
		},
		name: 'Bouble',
		description:
			'Introducing the latest addition to the NFT world, a stunning glass NFT that is truly one-of-a-kind. Every angle of this NFT offers a unique and captivating experience, as the light refracts and dances across.',
		price: 2.5,
		size: '1000x1000',
		image: '/public/products/bouble.png',
		putOnSale: true,
		directSale: false,
		date: 'May 16, 2022 at 12:08',
	},
	{
		id: 3,
		author: {
			firstName: 'Alex',
			lastName: 'Carting',
			nickname: 'Alex',
			avatar: '/public/collection/alex.png',
		},
		name: 'Sunrise',
		description:
			'Introducing the latest addition to the NFT world, a stunning glass NFT that is truly one-of-a-kind. Every angle of this NFT offers a unique and captivating experience, as the light refracts and dances across.',
		price: 2.75,
		size: '1000x1000',
		image: '/public/products/sunrise.png',
		putOnSale: true,
		directSale: false,
		date: 'May 16, 2022 at 6:08',
	},
]
