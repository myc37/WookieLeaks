import RocketIcon from "../Other/RocketIcon";
import Link from "next/link";

/**
 * A Star Wars themed custom select component for the database page.
 *
 * @param { string } name - The name that should be displayed by the select component.
 * @param { string } path - the path that the select component should route to on click.
 * @returns A Star Wars themed custom select component for the database page.
 */
export default function Select({ name, path }) {
	// select component spans 75% of the viewport width to fill empty space
	// text and rocket icon are white, change to gold when select component is hovered
	return (
		<Link href={path}>
			<a className="bg-zinc-800 rounded-lg px-8 py-4 cursor-pointer w-[75vw] hover:text-gold flex flex-row justify-between items-center md:text-2xl">
				{name}
				<RocketIcon />
			</a>
		</Link>
	);
}
