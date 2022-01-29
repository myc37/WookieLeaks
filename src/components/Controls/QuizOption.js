/**
 * A Star Wars themed custom quiz option component for the quiz page.
 *
 * @param { string } name - The name that should be displayed by the quiz option.
 * @param { boolean } correct - Whether or not this quiz option is the correct one.
 * @param { function } setCorrect - Setter function from parent component to change parent state on click.
 * @returns A Star Wars themed custom quiz option component for the quiz page.
 */

export default function QuizOption({ name, correct = false, setCorrect }) {
	// quiz option has black text with gold background
	// background changes to green when button is hovered
	// name is changed to lowercase because StarJedi font has issues with uppercase
	return (
		<div
			className="name-title cursor-pointer hover:bg-green-600"
			onClick={() => setCorrect(correct)}
		>
			{name.toLowerCase()}
		</div>
	);
}
