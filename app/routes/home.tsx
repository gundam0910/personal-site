import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import { PageLayout } from "../components/PageLayout";
import { SystemLedger } from "../components/SystemLedger";
import { profile, stats, projects, trainings } from "../lib/data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `${profile.name} — ${profile.role}` },
		{ name: "description", content: profile.tagline },
		{ property: "og:title", content: `${profile.name} — ${profile.role}` },
		{ property: "og:description", content: profile.tagline },
	];
}

export default function Home() {
	return (
		<PageLayout>
			{/* hero */}
			<section className="grid-bg border-b border-base-300">
				<div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
					<p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-field border border-base-300 bg-base-200/60 px-3 py-1 text-[11px] uppercase tracking-widest text-secondary">
						<span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
						status: available for remote &amp; freelance work
					</p>
					<h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
						{profile.tagline}
					</h1>
					<p className="mt-6 max-w-2xl text-base leading-relaxed text-base-content/70 sm:text-lg">
						{profile.summary}
					</p>
					<div className="mt-9 flex flex-wrap items-center gap-3">
						<NavLink to="/contact" className="btn btn-primary">
							Start a conversation
						</NavLink>
						<NavLink to="/experience" className="btn btn-ghost">
							View the systems log
						</NavLink>
					</div>

					<dl className="mt-16 grid grid-cols-1 gap-6 border-t border-base-300 pt-8 sm:grid-cols-3">
						{stats.map((s) => (
							<div key={s.label}>
								<dt className="eyebrow text-[11px] uppercase tracking-widest text-base-content/50">
									{s.label}
								</dt>
								<dd className="mt-1 font-display text-2xl font-semibold">{s.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			{/* systems ledger — signature element */}
			<section className="mx-auto max-w-5xl px-6 py-20">
				<div className="mb-8 flex items-end justify-between">
					<div>
						<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">
							Track record
						</p>
						<h2 className="font-display text-2xl font-semibold sm:text-3xl">
							Systems I've kept running
						</h2>
					</div>
					<NavLink
						to="/experience"
						className="hidden items-center gap-1 text-sm text-base-content/60 hover:text-base-content sm:inline-flex"
					>
						Full history <ArrowUpRight size={14} />
					</NavLink>
				</div>
				<SystemLedger />
			</section>

			{/* featured projects */}
			<section className="border-t border-base-300 bg-base-200/30">
				<div className="mx-auto max-w-5xl px-6 py-20">
					<div className="mb-8">
						<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">
							Selected work
						</p>
						<h2 className="font-display text-2xl font-semibold sm:text-3xl">Projects</h2>
					</div>
					<div className="grid gap-4 sm:grid-cols-3">
						{projects.slice(0, 3).map((p) => (
							<div
								key={p.slug}
								className="rounded-box border border-base-300 bg-base-100 p-5"
							>
								<h3 className="font-display text-base font-semibold">{p.name}</h3>
								<p className="mt-2 text-sm leading-relaxed text-base-content/70">
									{p.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-1.5">
									{p.tags.slice(0, 3).map((tag) => (
										<span
											key={tag}
											className="eyebrow rounded-field bg-base-200 px-2 py-1 text-[10px] uppercase tracking-wide text-base-content/60"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="mt-8">
						<NavLink to="/projects" className="btn btn-outline btn-sm">
							See all projects
						</NavLink>
					</div>
				</div>
			</section>

			{/* trainings & awards */}
			<section className="border-t border-base-300">
				<div className="mx-auto max-w-5xl px-6 py-16">
					<div className="mb-6">
						<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">
							Trainings &amp; Awards
						</p>
						<h2 className="font-display text-2xl font-semibold sm:text-3xl">
							Recognitions &amp; conferences
						</h2>
					</div>
					<ul className="grid gap-3 sm:grid-cols-3">
						{trainings.map((t) => (
							<li
								key={t.name}
								className="rounded-box border border-base-300 bg-base-100 p-4"
							>
								<p className="font-display text-sm font-medium">{t.name}</p>
								<p className="mt-1 eyebrow text-[10px] uppercase tracking-widest text-base-content/50">
									{t.year} · {t.location}
								</p>
								{t.achievement && (
									<p className="mt-2 inline-flex items-center gap-1 text-xs text-secondary">
										<span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
										{t.achievement}
									</p>
								)}
							</li>
						))}
					</ul>
				</div>
			</section>
		</PageLayout>
	);
}
