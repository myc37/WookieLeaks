import Head from "next/head";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

export default function Page({ title, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/light-saber.png" />
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
