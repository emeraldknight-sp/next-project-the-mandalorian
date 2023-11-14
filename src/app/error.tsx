"use client";

import { useEffect } from "react";
import { Animation } from "@/components/Animation";
import BabyGrogu from "../assets/baby-grogu.json";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="large-container">
			<main className="main main--error">
				<div className="error__content">
					<Animation src={BabyGrogu} width={200} height={200} />
					<h2 className="error__content--title">Something went wrong!</h2>
					<button
						type="button"
						className="button error__content--button"
						onClick={() => reset()}
					>
						Try again!!!
					</button>
				</div>
			</main>
		</div>
	);
}
