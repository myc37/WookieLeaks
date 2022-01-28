import { useRouter } from "next/router";
import RocketIcon from "./RocketIcon";

export default function Select({ name, path }) {
	const router = useRouter();
	return (
		<div
			className="bg-zinc-800 rounded-lg px-8 py-4 cursor-pointer w-[75vw] hover:text-gold flex flex-row justify-between items-center text-2xl"
			onClick={() => router.push(path)}
		>
			<div>{name}</div>
			<RocketIcon />
		</div>
	);
}
