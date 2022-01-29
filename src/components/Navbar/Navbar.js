import Link from "next/link";

export default function Navbar() {
	return (
		<div className="w-full border-b border-gold z-20 py-6 px-12 bg-black text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
			<div className="flex flex-row justify-center md:justify-between items-center">
				<Link href="/">
					<a className="text-gold  cursor-pointer font-display">
						WookieLeaks
					</a>
				</Link>
				<div className="hidden md:flex md:flex-row">
					<Link href="/people">
						<a className="cursor-pointer font-body border-r-2 border-gold pr-8">
							Database
						</a>
					</Link>
					<Link href="/quiz">
						<a className="cursor-pointer font-body pl-8">quiz</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
