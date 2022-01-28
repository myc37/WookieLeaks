export default function Background() {
	return (
		<div className="star-field col-center">
			{[...Array(5)].map((_, index) => {
				return <div key={index} className="layer"></div>;
			})}
		</div>
	);
}
