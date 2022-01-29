/**
 * Gets an integer which would be a valid index for the people collection in swapi.
 *
 * @returns A random integer between 1 and 83 but not 17.
 */

export default function getValidIndex() {
	let random_id = Math.floor(Math.random() * 83) + 1;

	while (random_id === 17) {
		random_id = Math.floor(Math.random() * 83) + 1;
	}
	return random_id;
}
