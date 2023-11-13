import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { getData } from "@/utils/api";

import Logo from "../assets/star-wars-logo.webp";
import ArtName from "../assets/mandalorian-art-name.webp";

import "../styles/reset.scss";
import "../styles/globals.scss";

export default async function Home() {
	const data = await getData();
	const mandalorian = data[0];

	return (
		<div className="large-container">
			<header className="header">
				<Image src={Logo} width={70} alt="Star Wars Logo" />
				<button type="button" className="button button--icon">
					<AiOutlineMenu size={24} />
				</button>
			</header>
			<main className="main">
				<div className="main__content">
					<div className="main__content--category">
						<span>TV Series</span>
						<div className="main__content--vote">
							<span>IMDb</span>
							<span>{mandalorian.vote_average.toFixed(1)}</span>
						</div>
					</div>
					<Image
						src={ArtName}
						alt="The Mandalorian Art Name"
						style={{
							width: "100%",
							height: "auto",
						}}
						priority
					/>
					<p>{mandalorian.overview}</p>
				</div>
				<div className="main__group-button">
					<button type="button" className="button border">
						<Link
							href="https://www.disneyplus.com/pt-br/series/the-mandalorian/3jLIGMDYINqD"
							target="_self"
							rel="noopener noreferrer"
						>
							Watch now
						</Link>
					</button>
					<button type="button" className="button border--left">
						<Link
							href="https://www.youtube.com/watch?v=aOC8E8z_ifw"
							target="_blank"
							rel="noopener noreferrer"
						>
							Trailer
						</Link>
					</button>
				</div>
			</main>
			<footer className="footer">
				<span>Disney. All rights reserved.</span>
			</footer>
		</div>
	);
}
