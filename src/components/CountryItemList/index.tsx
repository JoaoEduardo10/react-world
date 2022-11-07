
type Props = {
    text: string,
}

export const Itens = ({ text }: Props) => {
	return <li className="full-country_item">{text}</li>;
};