import prisma from "../../../lib/prisma";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Background from "../../components/Background";
import Page from "../../components/Page";

export default function Person({ data }) {
	const [imgSrc, setImgSrc] = useState(data.image);

	return (
		// <div>
		// 	<Head>
		// 		<title>{data.name}</title>
		// 	</Head>
		// 	<main>
		// 		<Background />
		// 		<div className="h-screen flex flex-col capitalize text-center px-10">
		// 			<div className="text-3xl p-10 z-10 lg:text-4xl">
		// 				{data.name}
		// 			</div>
		// 			<div className="col-center gap-y-12 md:gap-x-24 lg:flex-row 2xl:gap-x-48 lg:flex-grow z-10 pb-10">
		// 				<div className="w-5/6 sm:w-2/3 lg:w-1/3 2xl:w-1/4">
		// 					<Image
		// 						src={imgSrc}
		// 						alt={data.name}
		// 						height={750}
		// 						width={500}
		// 						quality={65}
		// 						layout="responsive"
		// 						onError={() => {
		// 							setImgSrc("/fallback.png");
		// 						}}
		// 					/>
		// 				</div>
		// 				<div className="grid gap-8 text-xl sm:grid-cols-3 sm:grid-flow-row sm:gap-12 md:gap-24">
		// 					<div>
		// 						<p className="category-title">Species</p>
		// 						<p>{data.species}</p>
		// 					</div>
		// 					<div>
		// 						<p className="category-title">Home World</p>
		// 						<p>{data.homeWorld}</p>
		// 					</div>
		// 					<div>
		// 						<p className="category-title">Gender</p>
		// 						<p>{data.gender}</p>
		// 					</div>
		// 					<div>
		// 						<p className="category-title">Skin Colour</p>
		// 						<p>{data.skinColour}</p>
		// 					</div>
		// 					<div>
		// 						<p className="category-title">Hair Colour</p>
		// 						<p>{data.hairColour}</p>
		// 					</div>
		// 					<div>
		// 						<p className="category-title">Eye Colour</p>
		// 						<p>{data.eyeColour}</p>
		// 					</div>
		// 					<div>
		// 						<p className="category-title">Height</p>
		// 						<p>{data.height}</p>
		// 					</div>
		// 					<div>
		// 						<p className="category-title">Mass</p>
		// 						<p>{data.mass}</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</main>
		// </div>
		<Page title={data.name}>
			<div className="flex flex-col gap-y-24 capitalize text-center px-10 w-screen my-12">
				<div className="text-2xl py-2 px-8 z-10 lg:text-4xl bg-yellow-500 rounded-full w-fit m-auto text-black">
					{data.name}
				</div>
				<div className="col-center gap-y-24 md:gap-x-24 lg:flex-row 2xl:gap-x-48 lg:flex-grow z-10 pb-10 w-full">
					<div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 2xl:w-1/5 border-2 border-yellow-500 rounded-full">
						<Image
							src={imgSrc}
							alt={data.name}
							height={4}
							width={3}
							quality={65}
							layout="responsive"
							onError={() => {
								setImgSrc("/fallback.png");
							}}
							className="rounded-full border border-yellow-500 bg-black"
						/>
					</div>
					<div className="grid gap-8 text-lg sm:grid-cols-3 sm:grid-flow-row sm:gap-12 md:gap-24 md:text-xl lg:text-2xl">
						<div>
							<p className="category-title">Species</p>
							<p>{data.species}</p>
						</div>
						<div>
							<p className="category-title">Home World</p>
							<p>{data.homeWorld}</p>
						</div>
						<div>
							<p className="category-title">Gender</p>
							<p>{data.gender}</p>
						</div>
						<div>
							<p className="category-title">Skin Colour</p>
							<p>{data.skinColour}</p>
						</div>
						<div>
							<p className="category-title">Hair Colour</p>
							<p>{data.hairColour}</p>
						</div>
						<div>
							<p className="category-title">Eye Colour</p>
							<p>{data.eyeColour}</p>
						</div>
						<div>
							<p className="category-title">Height</p>
							<p>{data.height}</p>
						</div>
						<div>
							<p className="category-title">Mass</p>
							<p>{data.mass}</p>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}

export async function getStaticProps({ params }) {
	const data = await prisma.people.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});
	return { props: { data } };
}

//TODO: change id_list to fetch id from database
export async function getStaticPaths() {
	const people = await prisma.people.findMany({
		select: {
			id: true,
		},
	});

	const paths = people.map((person) => {
		return { params: { id: person.id.toString() } };
	});

	return {
		paths,
		fallback: false,
	};
}
