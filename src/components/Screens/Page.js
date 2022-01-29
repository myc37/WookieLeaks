import Head from "next/head";
import Background from "./Background";
import Navbar from "../Navbar/Navbar";

export default function Page({ title, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/light-saber.png" />
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
