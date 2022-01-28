import Head from "next/head";
import Background from "../components/Background";

export default function Home() {
	return (
		<div>
			<Head>
				<link rel="icon" href="/light-saber.png" />
			</Head>
			<main className="h-screen col-center">
				<Background />
				<p>hi</p>
			</main>
		</div>
	);
}
