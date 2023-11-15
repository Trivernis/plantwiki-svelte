declare module "$lib/assets/plants/*.toml" {
	import type { PlantData } from "$lib/plants";
	const value: PlantData;
	export default value;
}
