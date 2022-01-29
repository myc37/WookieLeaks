export default function Background() {
	/**
	 * Animated galaxy background.
	 *
	 * @return Animated galaxy background.
	 */
	return (
		// background has fixed position, all other components will be given z-index > 0 to sit on top of the background
		<div className="star-field col-center">
			{[...Array(5)].map((_, index) => {
				return <div key={index} className="layer"></div>;
			})}
		</div>
	);
}
