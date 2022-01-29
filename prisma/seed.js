const { PrismaClient } = require("@prisma/client");
const fetch = require("node-fetch");

const prisma = new PrismaClient();

/**
 * Function to seed the prisma database with all the information from the people collection of swapi.
 * Also included some information (such as image) from a akabab's swapi to complement.
 */
async function main() {
	const dataList = [];
	for (let i = 0; i < 83; i++) {
		const swapi = await fetch(`https://swapi.dev/api/people/${i + 1}`).then(
			(res) => res.json()
		);
		// invalid results from swapi will have detail attribute
		if (!swapi.detail) {
			const akabab = await fetch(
				`https://akabab.github.io/starwars-api/api/id/${i + 1}.json`
			).then((res) => res.json());

			console.log(`${i + 1} ${swapi.name}`);

			// combine information from both APIs
			dataList.push({
				id: i + 1,
				name: swapi.name,
				species: akabab.species,
				gender: swapi.gender,
				height:
					swapi.height === "unknown"
						? swapi.height
						: swapi.height + "cm",
				mass: swapi.mass === "unknown" ? swapi.mass : swapi.mass + "kg",
				hairColour: swapi.hair_color,
				skinColour: swapi.skin_color,
				eyeColour: akabab.eyeColor || "unknown",
				image: akabab.image,
				homeWorld: Array.isArray(akabab.homeworld)
					? akabab.homeworld.reduce((x, y) => x + " & " + y)
					: akabab.homeworld || "unknown",
			});
		}
	}
	await prisma.people.createMany({
		data: dataList,
	});
}

main()
	.catch((error) => {
		console.log(error);
		process.exit(1);
	})
	.finally(async () => await prisma.$disconnect);
