import { NavLink } from "react-router";
import { nav } from "../lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/85 backdrop-blur">
			<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
				<NavLink to="/" className="font-display text-lg font-semibold tracking-tight">
					geoff<span className="text-primary">/</span>ayap
				</NavLink>

				<nav className="hidden items-center gap-1 sm:flex">
					{nav.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							end={item.to === "/"}
							className={({ isActive }) =>
								`eyebrow rounded-field px-3 py-2 text-xs uppercase tracking-widest transition-colors ${
									isActive
										? "text-primary"
										: "text-base-content/60 hover:text-base-content"
								}`
							}
						>
							{item.label}
						</NavLink>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<ThemeToggle />
					<a
						href="/contact"
						className="btn btn-primary btn-sm hidden sm:inline-flex"
					>
						Get in touch
					</a>
				</div>
			</div>

			{/* mobile nav */}
			<nav className="flex items-center gap-1 overflow-x-auto border-t border-base-300 px-4 py-2 sm:hidden">
				{nav.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						end={item.to === "/"}
						className={({ isActive }) =>
							`eyebrow shrink-0 rounded-field px-3 py-1.5 text-xs uppercase tracking-widest ${
								isActive ? "bg-base-200 text-primary" : "text-base-content/60"
							}`
						}
					>
						{item.label}
					</NavLink>
				))}
			</nav>
		</header>
	);
}
