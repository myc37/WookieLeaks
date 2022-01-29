import Page from "../../components/Screens/Page";
import Button from "../../components/Controls/Button";
import getValidIndex from "../../utils/ValidIndex";
import Image from "next/image";

/**
 * The page which prompts the user to take the quiz.
 *
 * @returns The pre-quiz prompt page.
 */
export default function QuizMain() {
	// generate the index of the person who will be the correct option in the quiz.
	const random_id = getValidIndex();

	return (
		<Page title="People">
			<div className="body-text">challenge yourself to</div>
			<div className="body-text">name everyone in</div>
			<div className="w-3/5 sm:w-2/5 lg:w-1/3 2xl:w-1/4 mt-8 fade-in-long">
				<Image
					src="/swlogo.png"
					alt="swlogo"
					height={1}
					width={2}
					layout="responsive"
					className="bg-black"
					priority
				/>
			</div>
			<Button text="start" path={`/quiz/${random_id}`} />
		</Page>
	);
}
