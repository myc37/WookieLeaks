import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	return (
		<div className="w-full border-b border-yellow-500 z-20 py-4 px-12 bg-black">
			<div className="flex flex-row justify-between items-center">
				<div
					className="w-1/4 lg:w-1/6 xl:w-1/12 cursor-pointer"
					onClick={() => router.push("/")}
				>
					<Image
						src="/wllogo.png"
						alt="wl-logo"
						height={100}
						width={213}
						layout="responsive"
						objectFit="cover"
						quality={65}
					/>
				</div>
				<div
					className="text-bold text-xl md:text-2xl xl:text-4xl cursor-pointer"
					onClick={() => router.push("/people")}
				>
					Database
				</div>
			</div>
		</div>
	);
}
