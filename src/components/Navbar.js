import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();

	return (
		<div className="w-full border-b border-yellow-500 z-20 p-4 bg-black">
			<div className="flex flex-row justify-between">
				<div
					className="w-1/4 lg:w-1/6 xl:w-1/12 cursor-pointer"
					onClick={() => router.push("/")}
				>
					<Image
						src="/wllogo.png"
						height={64}
						width={148}
						layout="responsive"
						objectFit="cover"
					/>
				</div>
				<div
					className="cursor-pointer text-4xl"
					onClick={() => router.push("/people")}
				>
					People
				</div>
			</div>
		</div>
	);
}
