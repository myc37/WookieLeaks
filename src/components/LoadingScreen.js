import Head from "next/head";
export default function LoadingScreen() {
	return (
		<div>
			<Head>
				<link
					href="https://use.fontawesome.com/releases/v5.10.0/css/all.css"
					rel="stylesheet"
				/>
			</Head>
			<main className="col-center h-screen">
				<div className="fade-out">
					<div className="loader">
						{[...Array(20).keys()].map((i) => (
							<span key={i} style={{ "--i": i + 1 }}></span>
						))}
						<div className="rocket"></div>
					</div>
				</div>
			</main>
		</div>
	);
}
