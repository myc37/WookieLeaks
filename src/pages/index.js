import { useRouter } from "next/router";
import Page from "../components/Page";
import Image from "next/image";

export default function Home() {
	const router = useRouter();
	return (
		<Page title="WookieLeaks">
			<div>Discover the</div>
			<div>People of</div>
			<div className="w-1/6">
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
