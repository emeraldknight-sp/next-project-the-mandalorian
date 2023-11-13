import axios from "axios";
import { config } from "dotenv";
config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const query = "The Mandalorian";

export async function getData() {
	try {
		const response = await axios.get(
			`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(
				query,
			)}`,
		);

		return response.data.results;
	} catch (error: any) {
		console.error("Error:", error.message);
		return [];
	}
}
