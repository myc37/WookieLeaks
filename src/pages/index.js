import Page from "../components/Page";
import Image from "next/image";

export default function Home() {
	return (
		<Page title="WookieLeaks">
			<div className="text-xl md:text-2xl xl:text-3xl text-bold">
				Discover the
			</div>
			<div className="text-xl md:text-2xl xl:text-3xl text-bold">
				People of
			</div>
			<div className="w-1/2 sm:w-1/3 xl:w-1/4 2xl:w-1/6 mt-8">
				<Image
					src="/swlogo.png"
					alt="swlogo"
					height={1}
					width={2}
					layout="responsive"
					className="bg-black"
				/>
			</div>
		</Page>
	);
}
