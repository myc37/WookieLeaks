import Page from "./Page";
import Button from "./Button";

export default function ResultScreen({ correct }) {
	return (
		<Page>
			<div className="col-center gap-y-8">
				{correct ? (
					<>
						<p className="body-text">well done!</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-green-600 h-3/4 w-3/4 result"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</>
				) : (
					<>
						<p className="body-text">good try!</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-red-600 h-3/4 w-3/4 result"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</>
				)}
			</div>
			<Button text="next question" path="/reset" />
		</Page>
	);
}
