import { isLeft } from "fp-ts/lib/Either";
import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";

const plantModules = import.meta.glob("$lib/assets/plants/*.toml", {
	import: "default",
	eager: true,
});

const PlantDataTS = t.type({
	slug: t.string,
	name: t.string,
	bin_name: t.string,

	image: t.type({
		local: t.union([t.string, t.undefined]),
		remote: t.union([t.string, t.undefined]),
		format: t.union([t.string, t.undefined]),
		width: t.union([t.number, t.undefined]),
		source: t.string,
		alt: t.string,
	}),
	temp: t.type({
		death: t.number,
		lower: t.number,
		upper: t.number,
	}),
	care: t.type({
		description: t.string,
		water_schedule: t.string,
		mist_schedule: t.union([t.string, t.undefined]),
		fertilize_schedule: t.union([t.string, t.undefined]),
		clean_schedule: t.union([t.string, t.undefined]),
	}),
	site: t.type({
		description: t.string,
		light: t.string,
		humidity: t.union([t.string, t.undefined]),
	}),
	common_issues: t.union([
		t.type({
			description: t.string,
		}),
		t.undefined,
	]),
});

export type PlantData = t.TypeOf<typeof PlantDataTS>;

type PlantMap = { [key: PlantData["slug"]]: PlantData };

export const plants: PlantMap = Object.values(plantModules).reduce(
	(acc: PlantMap, cur) => {
		const decoded = PlantDataTS.decode(cur);
		if (isLeft(decoded)) {
			throw Error(
				`Invalid plant data ${PathReporter.report(decoded).join("\n")}`,
			);
		}
		acc[decoded.right.slug] = decoded.right;
		return acc;
	},
	{} as PlantMap,
);
