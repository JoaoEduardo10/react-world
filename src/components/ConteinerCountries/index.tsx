import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

export const Conteiner = ({ children }: Props) => {
	return <div className='countries'>{children}</div>;
};