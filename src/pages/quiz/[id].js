import Page from "../../components/Screens/Page";
import prisma from "../../../lib/prisma";
import Image from "next/image";
import { useState } from "react";
import QuizOption from "../../components/Controls/QuizOption";
import ResultScreen from "../../components/Screens/ResultScreen";

export default function Quiz({ data, options }) {
	const [imgSrc, setImgSrc] = useState(data.image);
	const [correct, setCorrect] = useState(null);

	if (correct == null) {
		return (
			<Page>
				<div className="flex flex-col gap-y-24 text-center px-10 w-screen my-12">
					<div className="body-text">Who is this person?</div>
					<div className="col-center gap-y-24 md:gap-x-24 lg:flex-row 2xl:gap-x-48 lg:flex-grow z-10 pb-10 w-full">
						<div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 2xl:w-1/5 border-2 border-gold rounded-full fade-in-long">
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
								priority
							/>
						</div>
						<div className="grid gap-8 text-lg grid-cols-1 sm:grid-flow-row sm:gap-12 md:gap-24 md:text-xl lg:text-2xl">
							{options.map((item, index) => {
								return (
									<QuizOption
										key={index}
										name={item}
										correct={item === data.name}
										setCorrect={setCorrect}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</Page>
		);
	} else {
		return <ResultScreen correct={correct} />;
	}
}

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

export async function getStaticProps({ params }) {
	let random_id_1 = Math.floor(Math.random() * 82) + 1;
	let random_id_2 = Math.floor(Math.random() * 82) + 1;

	while (
		random_id_1 === 17 ||
		random_id_1 === params.id ||
		random_id_1 === random_id_2
	) {
		random_id_1 = Math.floor(Math.random() * 82) + 1;
	}
	while (
		random_id_2 === 17 ||
		random_id_2 === params.id ||
		random_id_1 === random_id_2
	) {
		random_id_2 = Math.floor(Math.random() * 82) + 1;
	}

	const data = await prisma.people.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});

	const alt = await prisma.people.findMany({
		where: {
			OR: [
				{
					id: random_id_1,
				},
				{
					id: random_id_2,
				},
			],
		},
		select: {
			name: true,
		},
	});

	const options = shuffleArray([data.name, alt[0].name, alt[1].name]);

	return { props: { data, options } };
}

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};
