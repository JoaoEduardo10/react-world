import { ChevronLeft, ChevronRight } from '@mui/icons-material';

type Props = {
    handleClickPrev: () => void,
    handleClickNext: () => void,
    disabledPrev: boolean,
    disabledNext: boolean,
}

export const Buttons = ({ disabledNext, disabledPrev,handleClickNext, handleClickPrev }: Props) => {
	return (
		<div className="pagenation">
			<button className="pagenation_prev" onClick={handleClickPrev} disabled={disabledPrev}>
				<ChevronLeft />
			</button>
			<button className="pagenation_next" onClick={handleClickNext} disabled={disabledNext}>
				<ChevronRight />
			</button>
		</div>
	);
};