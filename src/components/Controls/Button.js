import { useRouter } from "next/router";
import RocketIcon from "../Other/RocketIcon";

/**
 * A Star Wars themed custom button component.
 *
 * @param { string } text - The text to be displayed by the button.
 * @param  { string } text - The path that the button should route to on click.
 * @returns A Star Wars themed custom button component.
 */
export default function Button({ text, path }) {
	const router = useRouter();

	// button pulses and has gold text, changes to black text with gold background and no animation when hovered.
	// rocket icon only appears when button is hovered.
	return (
		<div
			className="z-10 hover:bg-gold rounded-full w-fit py-4 px-8 font-body text-4xl md:text-4xl xl:text-5xl 2xl:text-7xl text-gold hover:text-black hover:flex hover:flex-row hover:gap-x-12 cursor-pointer mt-16 group animate-pulse hover:animate-none"
			onClick={() => router.push(path)}
		>
			<p>{text}</p>
			<div className="hidden group-hover:block">
				<RocketIcon />
			</div>
		</div>
	);
}
