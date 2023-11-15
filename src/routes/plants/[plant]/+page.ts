import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { plants, type PlantData } from "$lib/plants";

export const load: PageLoad = ({ params }) => {
	if (plants[params.plant]) {
		return plants[params.plant] as PlantData;
	}

	throw error(404, "Not found");
};
