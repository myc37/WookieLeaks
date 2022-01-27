import prisma from "../../../lib/prisma";
import Head from "next/head";

export default function Person({ data }) {
	return (
		<div>
			<Head>
				<title>{data.name} Profile</title>
			</Head>
			<div className="text-center">
				<div className="bg-red-200">name: {data.name}</div>
				<div className="bg-red-200">gender: {data.gender}</div>
				<div className="bg-green-200">
					hair colour: {data.hairColour}
				</div>
				<div className="bg-green-200">
					skin colour: {data.skinColour}
				</div>
				<div className="bg-blue-200">height: {data.height}</div>
				<div className="bg-blue-200">mass: {data.mass}</div>
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
