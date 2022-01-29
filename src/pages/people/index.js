import prisma from "../../../lib/prisma";
import Page from "../../components/Screens/Page";
import Select from "../../components/Controls/Select";
/**
 * Database page consisting of the names of all people in the people collection of swapi.
 *
 * @param { Array } data - The list of names of all people in the database fetched from prisma.
 * @returns The database page.
 */
export default function People({ data }) {
	return (
		<Page title="People">
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
		</Page>
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
