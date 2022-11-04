import { ReactNode } from 'react';

type ContentProps = {
    children: ReactNode
}

export const Content = ({ children }: ContentProps) => {
	return (
		<div className='content'>
			{children}
		</div>
	);
};