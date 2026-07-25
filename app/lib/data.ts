export const profile = {
	name: "Geoffrey Ayap",
	role: "Senior Software Engineer",
	tagline: "15+ years shipping systems that can't afford downtime.",
	location: "Philippines · open to remote / international / freelance",
	summary:
		"Full-stack engineer specializing in JavaScript/TypeScript (React, Next.js, Angular, Node.js) and PHP (Laravel, Lumen). Background spans core banking, government digitalization, and consumer super-apps — systems where correctness and uptime aren't negotiable.",
	email: "you@geoff-ayap.site",
	github: "https://github.com/gundam0910",
	linkedin: "https://linkedin.com/in/your-linkedin-handle",
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
		period: "—",
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
		period: "Recent",
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
		slug: "core-banking-tellering",
		name: "Core Banking & Tellering System",
		description:
			"Transaction-critical teller and back-office tooling for enterprise banking operations, built for accuracy, auditability, and uptime.",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Fintech"],
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
	{
		slug: "pickaroo-merchant-portal",
		name: "PICK.A.ROO Merchant Portal",
		description:
			"Merchant-facing portal for a Filipino-owned lifestyle super-app, plus the architecture and handover documentation that let the next team run with it.",
		tags: ["React", "Next.js", "Documentation"],
		role: "Frontend Engineer",
	},
	{
		slug: "superapp-poc",
		name: "Flutter Super-App POC",
		description:
			"A from-scratch proof of concept for a lifestyle super-app: Flutter client, Riverpod state management, NestJS + PostgreSQL backend, phased 14-week delivery plan.",
		tags: ["Flutter", "Riverpod", "NestJS", "Supabase", "PostgreSQL"],
		role: "Solo build",
	},
];

export const skills = {
	Languages: ["TypeScript", "JavaScript (ES6+)", "PHP"],
	Frontend: ["React", "Next.js", "Angular", "Tailwind CSS", "DaisyUI", "Redux Toolkit"],
	Backend: ["Node.js", "NestJS", "Laravel", "Lumen", "FastAPI"],
	Data: ["PostgreSQL", "MongoDB"],
	Cloud: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
	Practice: ["REST APIs", "GraphQL", "CI/CD", "Testing (Jest/RTL)", "System Design"],
};

export const nav = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/experience", label: "Experience" },
	{ to: "/projects", label: "Projects" },
	{ to: "/contact", label: "Contact" },
];
