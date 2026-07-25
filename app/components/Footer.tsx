import { Mail } from "lucide-react";
import { profile } from "../lib/data";

// lucide-react dropped brand/logo icons; small inline marks instead.
function GithubMark() {
	return (
		<svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
			<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
		</svg>
	);
}

function LinkedinMark() {
	return (
		<svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
			<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
		</svg>
	);
}

export function Footer() {
	return (
		<footer className="border-t border-base-300">
			<div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
				<div className="eyebrow text-xs uppercase tracking-widest text-base-content/50">
					© {new Date().getFullYear()} {profile.name} · built with React Router
				</div>
				<div className="flex items-center gap-3">
					<a
						href={profile.github}
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className="btn btn-ghost btn-sm btn-circle"
					>
						<GithubMark />
					</a>
					<a
						href={profile.linkedin}
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className="btn btn-ghost btn-sm btn-circle"
					>
						<LinkedinMark />
					</a>
					<a
						href={`mailto:${profile.email}`}
						aria-label="Email"
						className="btn btn-ghost btn-sm btn-circle"
					>
						<Mail size={18} />
					</a>
				</div>
			</div>
		</footer>
	);
}
