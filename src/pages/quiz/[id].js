import Page from "../../components/Screens/Page";
import prisma from "../../../lib/prisma";
import Image from "next/image";
import { useState } from "react";
import QuizOption from "../../components/Controls/QuizOption";
import ResultScreen from "../../components/Screens/ResultScreen";

/**
 * Quiz page where users will be given an image as well as three names.
 * They will have to match the image to a name.
 *
 * @param { Object } data - The quiz data fetched from prisma.
 * @param { Array } options - The correct quiz answer and two other random answers fetched from prisma.
 * @returns The quiz page.
 */
export default function Quiz({ data, options }) {
	// some image links for the api are faulty, so a fallback image is prepared
	const [imgSrc, setImgSrc] = useState(data.image);
	const [correct, setCorrect] = useState(null);

	if (correct == null) {
		return (
			<Page>
				<div className="flex flex-col gap-y-24 text-center px-10 w-screen my-12 fade-in">
					<div className="body-text">who is this person?</div>
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
									setImgSrc("/images/fallback.png");
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
	// selecting the indexes of the people who will be the 2 wrong options in the quiz
	// params.id is the index of the person who will be the correct option in the quiz
	let random_id_1 = Math.floor(Math.random() * 83) + 1;
	let random_id_2 = Math.floor(Math.random() * 83) + 1;

	// ensuring that the both indexes are valid (not the same as each other and not 17)
	// id 17 does not exist in swapi so index cannot be 17
	while (
		random_id_1 === 17 ||
		random_id_1 === params.id ||
		random_id_1 === random_id_2
	) {
		random_id_1 = Math.floor(Math.random() * 83) + 1;
	}
	while (
		random_id_2 === 17 ||
		random_id_2 === params.id ||
		random_id_1 === random_id_2
	) {
		random_id_2 = Math.floor(Math.random() * 83) + 1;
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

// shuffle the array so that it is not the case that the correct option is always the first option
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};
