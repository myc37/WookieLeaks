export default function QuizOption({ name, correct = false, setCorrect }) {
	return (
		<div
			className="name-title cursor-pointer hover:bg-green-600"
			onClick={() => setCorrect(correct)}
		>
			{name.toLowerCase()}
		</div>
	);
}
