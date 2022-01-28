import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	return (
		<div className="w-full border-b border-gold z-20 py-6 px-12 bg-black text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
			<div className="flex flex-row justify-center md:justify-between items-center">
				<div
					className="text-gold  cursor-pointer font-display"
					onClick={() => router.push("/")}
				>
					<p>WookieLeaks</p>
				</div>
				<div className="hidden md:flex md:flex-row">
					<div
						className="cursor-pointer font-body border-r-2 border-gold pr-8"
						onClick={() => router.push("/people")}
					>
						Database
					</div>
					<div
						className="cursor-pointer font-body pl-8"
						onClick={() => router.push("/people")}
					>
						quiz
					</div>
				</div>
			</div>
		</div>
	);
}
