type Props = {
	name: string
}

export const Hello = ({ name }: Props) => {
	const upper = name.toUpperCase()
	return <div>Hello {upper}</div>
}
