import prisma from "../../../lib/prisma";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Person({ data }) {
	const [imgSrc, setImgSrc] = useState(data.image);

	return (
		<div>
			<Head>
				<link rel="icon" href="/light-saber.png" />
				<title>{data.name}</title>
			</Head>
			<div className="flex flex-col capitalize text-center text-white">
				<div className="text-3xl p-10">{data.name}</div>
				<div className="flex flex-col gap-y-12 mb-8 justify-center items-center md:gap-x-24 xl:gap-x-36 lg:flex-row">
					<div className="w-5/6 sm:w-2/3 lg:w-1/3 2xl:w-1/4">
						<Image
							src={imgSrc}
							alt={data.name}
							height={750}
							width={500}
							layout="responsive"
							onError={() => {
								setImgSrc("/fallback.png");
							}}
						/>
					</div>
					<div className="grid gap-8 sm:grid-cols-3 sm:grid-flow-row sm:gap-12 md:gap-24 text-2xl">
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
		</div>
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
