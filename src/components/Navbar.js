import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();

	return (
		<div className="w-full border-b-2 border-yellow-500 z-20 p-4 bg-black">
			<div className="flex flex-row justify-between">
				<div
					className="w-1/4 lg:w-1/6 xl:w-1/12 cursor-pointer"
					onClick={() => router.push("/")}
				>
					<Image
						src="/swlogo.png"
						height={64}
						width={148}
						layout="responsive"
						objectFit="cover"
					/>
				</div>
				{/* <div className="flex flex-row items-center">
					<div className="border-r-2 border-yellow-500 p-2">
						People
					</div>
					<div className="p-2">Quiz</div>
				</div> */}
			</div>
		</div>
	);
}
