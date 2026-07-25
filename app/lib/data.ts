export const profile = {
	name: "Geoffrey Ayap",
	role: "Senior Software Engineer",
	tagline: "15+ years shipping systems that can't afford downtime.",
	location: "Philippines · open to remote / international / freelance",
	summary:
		"Full-stack engineer specializing in JavaScript/TypeScript (React, Next.js, Angular, Node.js) and PHP (Laravel, Lumen). Background spans core banking, government digitalization, and consumer super-apps — systems where correctness and uptime aren't negotiable.",
	email: "geoffrey.ayap@gmail.com",
	github: "https://github.com/gundam0910",
	linkedin: "https://www.linkedin.com/in/geoff101",
};

export const stats = [
	{ label: "Years experience", value: "15+" },
	{ label: "Systems shipped", value: "10+" },
	{ label: "Domains", value: "Banking · Gov · Retail" },
];

export type SystemEntry = {
	id: string;
	org: string;
	title: string;
	period: string;
	status: "ONLINE" | "SHIPPED" | "IN PROGRESS";
	summary: string;
	stack: string[];
};

export const systems: SystemEntry[] = [
	{
		id: "metrobank-core-banking",
		org: "Metrobank",
		title: "Core Banking & Tellering System",
		period: "2021–2024",
		status: "ONLINE",
		summary:
			"Engineering work on core banking and teller-facing systems for one of the Philippines' largest banks — high-stakes, transaction-critical software with strict accuracy and compliance requirements.",
		stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
	},
	{
		id: "gov-health-digitalization",
		org: "Philippine Government",
		title: "National Health Digitalization Initiative",
		period: "—",
		status: "SHIPPED",
		summary:
			"Contributed to a national-scale government health digitalization program, building software to move health services and records onto modern digital infrastructure.",
		stack: ["TypeScript", "PHP (Laravel)", "PostgreSQL"],
	},
	{
		id: "pickaroo-merchant-portal",
		org: "98Labs Inc.",
		title: "PICK.A.ROO Merchant Portal",
		period: "2025–Present",
		status: "IN PROGRESS",
		summary:
			"Frontend engineering and technical documentation (architecture docs, knowledge transfer, technical handover) for the merchant-facing portal of PICK.A.ROO, a Filipino-owned lifestyle super-app.",
		stack: ["React", "Next.js", "Node.js"],
	},
];

export type Project = {
	slug: string;
	name: string;
	description: string;
	tags: string[];
	role: string;
	href?: string;
};

export const projects: Project[] = [
	{
		slug: "pickaroo-merchant-portal",
		name: "PICK.A.ROO Merchant Portal",
		description:
			"Merchant-facing portal for a Filipino-owned lifestyle super-app, plus the architecture and handover documentation that let the next team run with it.",
		tags: ["React", "Next.js", "Documentation"],
		role: "Frontend Engineer",
	},
	{
		slug: "timekeepers-payroll",
		name: "Timekeepers Payroll System",
		description:
			"Full-stack payroll platform proof-of-concept built on Remix — owned frontend, backend API, and production maintenance end-to-end.",
		tags: ["Remix", "TypeScript", "Node.js", "Supabase", "Fintech"],
		role: "Senior Software Engineer",
	},
	{
		slug: "core-banking-tellering",
		name: "Core Banking & Tellering System",
		description:
			"Transaction-critical teller and back-office tooling for enterprise banking operations, built for accuracy, auditability, and uptime.",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Fintech"],
		role: "Senior Software Engineer",
	},
	{
		slug: "pasig-hudson-gtm",
		name: "Pasig & Hudson GTM Platform",
		description:
			"Go-to-market platform with full-stack ownership: Node.js and Laravel Lumen APIs, TypeScript + React frontend, deployed via Docker on AWS.",
		tags: ["TypeScript", "React", "Node.js", "Laravel", "AWS", "Docker"],
		role: "Senior Software Engineer",
	},
	{
		slug: "quadx-kaberx",
		name: "Quad X — KaberX App",
		description:
			"Cross-platform consumer app shipped as a 3-week MVP, then iterated. Mobile (Ionic/Angular) + backend (Laravel Lumen, Redis) for a Filipino lifestyle platform.",
		tags: ["Angular", "Ionic", "Laravel", "Redis", "Mobile"],
		role: "Senior Software Engineer · On-site Consultant",
	},
	{
		slug: "quadx-checkmeout",
		name: "Quad X — CheckMeOut",
		description:
			"Four-year engagement building and maintaining a retail platform — REST API on Laravel Lumen, React + Redux frontend, direct client coordination.",
		tags: ["React", "Redux", "Laravel", "REST API"],
		role: "Senior Software Engineer",
	},
	{
		slug: "gov-health-platform",
		name: "National Health Digitalization Platform",
		description:
			"Government-scale platform work moving health services onto digital infrastructure, built for reliability at national scale.",
		tags: ["PHP", "Laravel", "TypeScript", "PostgreSQL", "GovTech"],
		role: "Software Engineer",
	},
];

export const skills = {
	Languages: ["JavaScript", "TypeScript", "PHP"],
	Frontend: ["React", "Next.js", "Angular", "Ionic", "Redux/Redux-Saga", "HTML5", "CSS3", "Tailwind CSS", "DaisyUI"],
	Backend: ["Node.js", "Laravel", "Lumen", "REST APIs", "Swagger/OpenAPI"],
	Data: ["PostgreSQL", "MySQL", "Supabase", "Redis"],
	Cloud: ["AWS", "Docker", "Jenkins", "GitHub Actions"],
	Legacy: ["Zend Framework", "CodeIgniter", "PyroCMS", "Grails", "Joomla", "Magento", "WordPress", "Godot"],
	Practice: ["Unit testing", "Integration testing", "QA testing", "Code repository management", "DevOps workflows", "Software design", "Debugging & deployment"],
};

export const nav = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/experience", label: "Experience" },
	{ to: "/projects", label: "Projects" },
	{ to: "/contact", label: "Contact" },
];

export type Training = {
	name: string;
	year: number;
	location: string;
	achievement?: string;
};

export const trainings: Training[] = [
	{
		name: "Angular Malaysia (NgMy)",
		year: 2019,
		location: "Malaysia",
	},
	{
		name: "JSConf & CSSConf",
		year: 2015,
		location: "Singapore",
	},
	{
		name: "TADHack Philippines",
		year: 2014,
		location: "Philippines",
		achievement: "1st Runner-up",
	},
];
