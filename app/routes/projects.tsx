import type { Route } from "./+types/projects";
import { PageLayout } from "../components/PageLayout";
import { profile, projects } from "../lib/data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `Projects — ${profile.name}` },
		{ name: "description", content: "Selected engineering work and case studies." },
	];
}

export default function Projects() {
	return (
		<PageLayout>
			<section className="mx-auto max-w-5xl px-6 py-20">
				<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">Work</p>
				<h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Projects</h1>
				<p className="mt-4 max-w-2xl text-base-content/70">
					A mix of enterprise systems, government infrastructure, and independent builds.
				</p>

				<div className="mt-10 grid gap-4 sm:grid-cols-2">
					{projects.map((p) => (
						<article
							key={p.slug}
							className="rounded-box border border-base-300 bg-base-200/20 p-6"
						>
							<p className="eyebrow text-[10px] uppercase tracking-widest text-base-content/40">
								{p.role}
							</p>
							<h2 className="mt-1 font-display text-lg font-semibold">{p.name}</h2>
							<p className="mt-2 text-sm leading-relaxed text-base-content/70">
								{p.description}
							</p>
							<div className="mt-4 flex flex-wrap gap-1.5">
								{p.tags.map((tag) => (
									<span
										key={tag}
										className="eyebrow rounded-field bg-base-300/50 px-2 py-1 text-[10px] uppercase tracking-wide text-base-content/60"
									>
										{tag}
									</span>
								))}
							</div>
						</article>
					))}
				</div>
			</section>
		</PageLayout>
	);
}
