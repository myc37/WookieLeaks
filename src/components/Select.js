import { useRouter } from "next/router";

export default function Select({ name, path }) {
	const router = useRouter();
	return (
		<div
			className="bg-zinc-800 rounded-lg px-8 py-4 cursor-pointer w-[75vw] hover:text-yellow-500"
			onClick={() => router.push(path)}
		>
			<div>{name}</div>
		</div>
	);
}
