import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	title: "My Personal Website",
	projectId: "gq0hpys6",
	dataset: "production",
	basePath: "/admin",
	apiVersion: "2023-06-08",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
