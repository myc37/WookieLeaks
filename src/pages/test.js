import prisma from "../../lib/prisma";
import Navbar from "../components/Navbar";
import Select from "../components/Select";

export default function Test({ data }) {
	return (
		<div className="col-center">
			<Navbar />
			<div className="star-field col-center">
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
			</div>

			<div className="col-center gap-4 p-8 z-10">
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
