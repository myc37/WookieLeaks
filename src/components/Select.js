import { useRouter } from "next/router";

export default function Select({ name, path }) {
	const router = useRouter();
	return (
		<div
			className="bg-zinc-800 rounded-lg px-8 py-4 font-bold cursor-pointer w-[75vw] text-gray-400 hover:text-yellow-400"
			onClick={() => router.push(path)}
		>
			<div>{name}</div>
		</div>
	);
}
