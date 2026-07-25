import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "ledger-theme";

export function ThemeToggle() {
	const [theme, setTheme] = useState<"ledger-dark" | "ledger-light" | null>(null);

	useEffect(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const initial =
			stored === "ledger-light" || stored === "ledger-dark"
				? stored
				: window.matchMedia("(prefers-color-scheme: light)").matches
					? "ledger-light"
					: "ledger-dark";
		document.documentElement.setAttribute("data-theme", initial);
		setTheme(initial);
	}, []);

	function toggle() {
		const next = theme === "ledger-dark" ? "ledger-light" : "ledger-dark";
		document.documentElement.setAttribute("data-theme", next);
		window.localStorage.setItem(STORAGE_KEY, next);
		setTheme(next);
	}

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label="Toggle color theme"
			className="btn btn-ghost btn-sm btn-circle"
		>
			{theme === "ledger-light" ? <Moon size={18} /> : <Sun size={18} />}
		</button>
	);
}
