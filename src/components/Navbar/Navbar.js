import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

/**
 * A Star Wars themed navigation bar component.
 *
 * @returns A Star Wars themed navigation bar component.
 */
export default function Navbar() {
	const [open, setOpen] = useState(false);

	// navigation bar has black background so that animated stars dont enter it
	// website title is justified to the left side and website pages are justified to the right side
	// for smaller screen sizes (<768px) only website title is shown and it is centralized
	return (
		<div
			className={`sticky top-0 left-0 md:static w-full border-b border-gold z-20 py-6 px-6 bg-black text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl ${
				open ? "flex flex-col" : "flex justify-between"
			}`}
		>
			<div className="flex flex-row justify-between items-center">
				<Link href="/">
					<a className="text-gold cursor-pointer font-display">
						WookieLeaks
					</a>
				</Link>
				<div
					className="cursor-pointer hover:text-gold absolute top-6 right-8 md:hidden"
					onClick={() => setOpen(!open)}
				>
					<FontAwesomeIcon icon={open ? faTimes : faBars} />
				</div>
			</div>
			<ul
				className={`${
					open ? "flex flex-col items-center pt-8 gap-y-4" : "hidden"
				} md:flex md:flex-row`}
			>
				<li>
					<Link href="/people">
						<a className="nav-item md:border-gold md:border-b-0 md:border-r-2 md:pr-8 md:pb-0">
							people
						</a>
					</Link>
				</li>
				<li>
					<Link href="/quiz">
						<a className="nav-item pt-8 md:pl-8 md:pt-0">quiz</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
