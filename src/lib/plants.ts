import aloeVera from "$lib/assets/plants/aloe-vera.toml";
import monsteraDeliciosa from "$lib/assets/plants/monstera-deliciosa.toml";

export type PlantData = {
	slug: string;
	name: string;
	bin_name: string;

	image: {
		local?: string;
		remote?: string;
		format?: string;
		width?: number;
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

type PlantMap = { [key: PlantData["slug"]]: PlantData };

export const plants: PlantMap = [aloeVera, monsteraDeliciosa].reduce(
	(acc, cur) => {
		acc[cur.slug] = cur;
		return acc;
	},
	{} as PlantMap,
);
