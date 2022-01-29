import Page from "../components/Page";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Button from "../components/Button";

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return loading ? (
		<LoadingScreen />
	) : (
		<div className="fade-in">
			<Page title="WookieLeaks">
				<div className="body-text">discover the</div>
				<div className="body-text">universe of</div>
				<div className="w-3/5 sm:w-2/5 lg:w-1/3 2xl:w-1/4 mt-8 fade-in-long">
					<Image
						src="/swlogo.png"
						alt="swlogo"
						height={1}
						width={2}
						layout="responsive"
						className="bg-black"
						priority
					/>
				</div>
				<Button text="explore now" path="/people" />
			</Page>
		</div>
	);
}
