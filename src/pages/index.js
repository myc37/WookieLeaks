import Page from "../components/Page";
import Image from "next/image";
import RocketIcon from "../components/RocketIcon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
	const router = useRouter();
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
				<div className="text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-body">
					discover the
				</div>
				<div className="text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-body">
					universe of
				</div>
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
				<div
					className="z-10 hover:bg-gold rounded-full w-fit py-4 px-8 font-body text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl text-gold hover:text-black hover:flex hover:flex-row hover:gap-x-12 cursor-pointer mt-8 group animate-pulse hover:animate-none"
					onClick={() => router.push("/people")}
				>
					<p>Explore Now</p>
					<div className="hidden group-hover:block">
						<RocketIcon />
					</div>
				</div>
			</Page>
		</div>
	);
}
