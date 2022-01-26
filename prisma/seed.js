import pkg from "@prisma/client";
const { PrismaClient } = pkg;
import fetch from "node-fetch";

const prisma = new PrismaClient();

async function main() {
	const dataList = [];
	for (let i = 0; i < 83; i++) {
		await fetch(`https://swapi.dev/api/people/${i + 1}`)
			.then((res) => res.json())
			.then((resJson) => {
				if (!resJson.detail) {
					dataList.push({
						id: i + 1,
						name: resJson.name,
						gender: resJson.gender,
						hairColour: resJson.hair_color,
						skinColour: resJson.skin_color,
						height: resJson.height,
						mass: resJson.mass,
					});
				}
			});
	}
	// console.log(dataList);
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
