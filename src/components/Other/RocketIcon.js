import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Wrapper for the FontAwesome rocket icon which rotates it by 45 degrees to make it point rightwards.
 *
 * @returns Rotated FontAwesome rocket icon.
 */
export default function RocketIcon() {
	return <FontAwesomeIcon icon={faRocket} className="rotate-45" />;
}
