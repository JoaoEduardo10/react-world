import { ReactNode } from 'react';

type Props = {
	children: ReactNode
}

export const ConteinerCards = ({ children }: Props) => {
	return (
		<li className='country'>
			{children}
		</li>
	);
};