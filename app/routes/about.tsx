import type { Route } from "./+types/about";
import { PageLayout } from "../components/PageLayout";
import { profile, skills } from "../lib/data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `About — ${profile.name}` },
		{ name: "description", content: profile.summary },
	];
}

export default function About() {
	return (
		<PageLayout>
			<section className="mx-auto max-w-3xl px-6 py-20">
				<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">About</p>
				<h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
					{profile.name}
				</h1>
				<p className="mt-1 text-base-content/60">
					{profile.role} · {profile.location}
				</p>

				<div className="mt-10 space-y-5 text-base leading-relaxed text-base-content/80">
					<p>
						I'm a senior software engineer with 15+ years building systems where "it
						mostly works" isn't good enough — core banking infrastructure, national
						government health platforms, and consumer-facing super-apps that all share
						one requirement: they have to be right, and they have to stay up.
					</p>
					<p>
						My day-to-day sits across the stack: React, Next.js, and Angular on the
						frontend; Node.js and PHP (Laravel/Lumen) on the backend; PostgreSQL and
						MongoDB underneath. I care more about shipping something maintainable and
						correct than about chasing the newest framework — though I'll reach for
						modern tooling when it earns its place.
					</p>
					<p>
						Right now I'm based in the Philippines, working with 98Labs Inc., and
						actively open to remote and international roles, local Philippine
						opportunities, and freelance or consulting engagements — particularly
						anything that touches fintech, govtech, or product engineering at scale.
					</p>
				</div>

				<div className="mt-14">
					<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">
						Toolbox
					</p>
					<div className="mt-4 grid gap-6 sm:grid-cols-2">
						{Object.entries(skills).map(([category, items]) => (
							<div key={category}>
								<h3 className="font-display text-sm font-semibold text-base-content/70">
									{category}
								</h3>
								<div className="mt-2 flex flex-wrap gap-1.5">
									{items.map((item) => (
										<span
											key={item}
											className="eyebrow rounded-field border border-base-300 bg-base-200/50 px-2.5 py-1 text-[10px] uppercase tracking-wide text-base-content/70"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</PageLayout>
	);
}
