import Link from "next/link";

/**
 * A Star Wars themed navigation bar component.
 *
 * @returns A Star Wars themed navigation bar component.
 */
export default function Navbar() {
	// navigation bar has black background so that animated stars dont enter it
	// website title is justified to the left side and website pages are justified to the right side
	// for smaller screen sizes (<768px) only website title is shown and it is centralized
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
