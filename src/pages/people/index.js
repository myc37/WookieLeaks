import prisma from "../../../lib/prisma";
import Background from "../../components/Background";
import Select from "../../components/Select";

export default function People({ data }) {
	return (
		<div className="col-center">
			<Background />
			<div className="col-center gap-4 p-8 h-full z-10">
				{data.map((person, index) => {
					return (
						<Select
							key={index}
							name={person.name}
							path={`people/${person.id}`}
						/>
					);
				})}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const data = await prisma.people.findMany({
		select: {
			name: true,
			id: true,
		},
	});

	return { props: { data } };
}
