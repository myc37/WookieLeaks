import Head from "next/head";
import Background from "./Background";
import Navbar from "../Navbar/Navbar";

/**
 * A wrapper for all pages in the website with a standard format.
 *
 * @param { string } title
 * @param { children } children
 * @returns A wrapper for all pages in the website with a standard format.
 */
export default function Page({ title, children }) {
	// pages will minimally span the entire height of the viewport
	// children will flex-grow to take up the remaining space below the navigation bar.
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/icons/light-saber.png" />
				<link
					href="https://use.fontawesome.com/releases/v5.10.0/css/all.css"
					rel="stylesheet"
				/>
			</Head>
			<main className="h-full min-h-screen flex flex-col">
				<Navbar />
				<div className="col-center flex-grow">
					<Background></Background>
					{children}
				</div>
			</main>
		</div>
	);
}
