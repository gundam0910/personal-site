import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("experience", "routes/experience.tsx"),
	route("projects", "routes/projects.tsx"),
	route("contact", "routes/contact.tsx"),
	route("api/contact", "routes/api.contact.ts"),
] satisfies RouteConfig;
