import { useRouter } from "next/router";
import RocketIcon from "../components/RocketIcon";

export default function Button({ text, path }) {
	const router = useRouter();

	return (
		<div
			className="z-10 hover:bg-gold rounded-full w-fit py-4 px-8 font-body text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl text-gold hover:text-black hover:flex hover:flex-row hover:gap-x-12 cursor-pointer mt-16 group animate-pulse hover:animate-none"
			onClick={() => router.push(path)}
		>
			<p>{text}</p>
			<div className="hidden group-hover:block">
				<RocketIcon />
			</div>
		</div>
	);
}
