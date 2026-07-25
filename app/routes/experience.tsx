import type { Route } from "./+types/experience";
import { PageLayout } from "../components/PageLayout";
import { SystemLedger } from "../components/SystemLedger";
import { profile } from "../lib/data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `Experience — ${profile.name}` },
		{
			name: "description",
			content: "Career history across core banking, government, and product engineering.",
		},
	];
}

export default function Experience() {
	return (
		<PageLayout>
			<section className="mx-auto max-w-5xl px-6 py-20">
				<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">
					Experience
				</p>
				<h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
					Systems log
				</h1>
				<p className="mt-4 max-w-2xl text-base-content/70">
					15+ years across enterprise, government, and product teams — currently at{" "}
					<span className="text-base-content">98Labs Inc.</span> as a Senior Software
					Engineer. Below are the engagements that best represent the range of the work.
				</p>

				<div className="mt-10">
					<SystemLedger />
				</div>

				<div className="mt-10 rounded-box border border-base-300 bg-base-200/30 p-6">
					<h2 className="font-display text-lg font-semibold">A note on dates</h2>
					<p className="mt-2 text-sm leading-relaxed text-base-content/70">
						Exact engagement dates are being finalized — a couple of project ranges in
						my source CV overlap and are worth double-checking before this goes live.
						Update the <code className="eyebrow text-xs">period</code> field in{" "}
						<code className="eyebrow text-xs">app/lib/data.ts</code> once confirmed.
					</p>
				</div>
			</section>
		</PageLayout>
	);
}
