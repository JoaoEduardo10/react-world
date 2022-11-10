
type DataPrps = {
    first: number,
    firstState: number,
    last: number,
    lastState: number,
    pais: string,
    page: boolean,
}

export const initialStateData: DataPrps = {
	first: 0,
	last: 6,
	firstState: 0,
	lastState: 6,
	pais: '',
	page: false,
};