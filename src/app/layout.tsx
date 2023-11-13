import type { Metadata, Viewport } from "next";
import { Teko } from "next/font/google";

const kdam = Teko({
	subsets: ["latin"],
	variable: "--tipographyTeko",
	display: "swap",
});

export const metadata: Metadata = {
	title: "The Mandalorian | Disney Plus+ | Star Wars Series",
	description:
		"Follow the Mandalorian's adventures in a distant galaxy. An exciting series that explores the Star Wars universe with a unique twist. Join the bounty hunter as he faces challenges, uncovers secrets and protects the Child. Embark on this epic journey now!",
	category: "entertainment",
	applicationName: "Next Project The Mandalorian",
	authors: { name: "Equipe de Produção", url: "https://www.starwars.com/" },
	generator: "Next.js",
	keywords:
		"Star Wars, Mandalorian, Baby Yoda, TV Series, Sci-Fi, adventure, space, bounty hunter, Disney Plus",
	creator: "Next.js",
	publisher: "Disney",
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "The Mandalorian | Disney Plus+ | Star Wars Series",
		description:
			"Follow the Mandalorian's adventures in a distant galaxy. An exciting series that explores the Star Wars universe with a unique twist. Join the bounty hunter as he faces challenges, uncovers secrets and protects the Child. Embark on this epic journey now!",
		type: "website",
	},
	referrer: "origin-when-cross-origin",
	manifest: "/site.webmanifest",
	icons: [
		{ rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
	],
	appleWebApp: {
		capable: true,
		title: "The Mandalorian",
		statusBarStyle: "default",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	colorScheme: "dark",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={kdam.className}>{children}</body>
		</html>
	);
}
