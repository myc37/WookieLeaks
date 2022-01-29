import RocketIcon from "./RocketIcon";
import Link from "next/link";

export default function Select({ name, path }) {
	return (
		<Link href={path}>
			<a className="bg-zinc-800 rounded-lg px-8 py-4 cursor-pointer w-[75vw] hover:text-gold flex flex-row justify-between items-center text-2xl">
				{name}
				<RocketIcon />
			</a>
		</Link>
	);
}
