import prisma from "../../../lib/prisma";
import Image from "next/image";
import Page from "../../components/Page";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Person({ data }) {
	const router = useRouter();
	const [imgSrc, setImgSrc] = useState(data.image);

	return (
		<div className="fade-in">
			<Page title={data.name}>
				<div className="flex flex-col gap-y-24 text-center px-10 w-screen my-12">
					<div className="text-2xl py-2 px-8 z-10 lg:text-4xl bg-gold rounded-full w-fit m-auto text-black font-body">
						{data.name.toLowerCase()}
					</div>
					<div className="col-center gap-y-24 md:gap-x-24 lg:flex-row 2xl:gap-x-48 lg:flex-grow z-10 pb-10 w-full">
						<button
							className="side-icon"
							onClick={() =>
								data.id === 18
									? router.push(`${data.id - 2}`)
									: router.push(`${data.id - 1}`)
							}
							disabled={data.id == 1}
						>
							<FontAwesomeIcon icon={faChevronLeft} />
						</button>
						<div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 2xl:w-1/5 border-2 border-gold rounded-full fade-in-long">
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
								className="rounded-full border border-gold bg-black"
							/>
						</div>
						<div className="grid gap-8 text-lg sm:grid-cols-3 sm:grid-flow-row sm:gap-12 md:gap-24 md:text-xl lg:text-2xl capitalize">
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
						<button
							className="side-icon"
							onClick={() =>
								data.id === 15
									? router.push(`${data.id + 2}`)
									: router.push(`${data.id + 1}`)
							}
							disabled={data.id == 83}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
				</div>
			</Page>
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
