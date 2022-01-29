export default function getValidIndex() {
	let random_id = Math.floor(Math.random() * 82) + 1;

	while (random_id === 17) {
		random_id = Math.floor(Math.random() * 82) + 1;
	}
	return random_id;
}
