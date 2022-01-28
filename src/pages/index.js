import { useRouter } from "next/router";
import Page from "../components/Page";

export default function Home() {
	const router = useRouter();
	return (
		<Page title="WookieLeaks">
			<button
				className="text-yellow-400 z-10"
				onClick={() => router.push("/people")}
			>
				People
			</button>
		</Page>
	);
}
