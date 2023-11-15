import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
// @ts-ignore
import plants from "$lib/assets/plants.toml";

export type PlantData = {
	name: string;
	bin_name: string;

	image: {
		small: string;
		medium: string;
		large: string;
		source: string;
		alt: string;
	};
	temp: {
		death: number;
		lower: number;
		upper: number;
	};
	care: {
		description: string;
		water_schedule: string;
		mist_schedule?: string;
		fertilize_schedule?: string;
		clean_schedule?: string;
	};
	site: {
		description: string;
		light: string;
		humidity?: string;
	};
};

export const load: PageLoad = ({ params }) => {
	console.log(plants);
	if (plants[params.plant]) {
		return plants[params.plant] as PlantData;
	}

	throw error(404, "Not found");
};
