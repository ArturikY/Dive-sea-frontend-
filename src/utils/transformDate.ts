export const transformDate = (date: string) => {
	const dataTime: string = date.split('T')[0]

	const arr: string[] = dataTime.split('-')

	const day: string = arr[2]
	const valDay: string | undefined = validDay(day)

	const month: string = arr[1]
	const valMonth: string | undefined = validMonth(month)

	const result: string = `${valMonth} ${valDay}, ${arr[0]}`
	return result
}

const validMonth = (month: string) => {
	if (+month === 1) {
		return 'January'
	} else if (+month === 2) {
		return 'Febrary'
	} else if (+month === 3) {
		return 'March'
	} else if (+month === 4) {
		return 'April'
	} else if (+month === 5) {
		return 'May'
	} else if (+month === 6) {
		return 'June'
	} else if (+month === 7) {
		return 'July'
	} else if (+month === 8) {
		return 'August'
	} else if (+month === 9) {
		return 'September'
	} else if (+month === 10) {
		return 'October'
	} else if (+month === 11) {
		return 'November'
	} else if (+month === 12) {
		return 'December'
	}
}

const validDay = (day: string) => {
	if (day[0] === '0') {
		return day[1]
	} else {
		return day
	}
}
