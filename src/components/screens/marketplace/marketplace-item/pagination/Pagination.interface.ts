import { Dispatch, SetStateAction } from 'react'

export interface IPagination {
	isExist: boolean
	setConditionString: Dispatch<SetStateAction<string>>
}
