import Head from "next/head";

/**
 * A loading screen with a flying rocket animation.
 *
 * @returns  A loading screen with a flying rocket animation.
 */
export default function LoadingScreen() {
	// loading screen will load for 3s
	// loading screen will fade out, then the home page will fade in
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
