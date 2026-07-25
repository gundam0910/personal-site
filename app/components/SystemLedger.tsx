import { systems } from "../lib/data";

const statusColor: Record<string, string> = {
	ONLINE: "bg-secondary",
	SHIPPED: "bg-primary",
	"IN PROGRESS": "bg-info",
};

export function SystemLedger() {
	return (
		<div className="grid-bg rounded-box border border-base-300 bg-base-200/40">
			<div className="eyebrow flex items-center justify-between border-b border-base-300 px-5 py-3 text-[11px] uppercase tracking-widest text-base-content/50">
				<span>systems_log.txt</span>
				<span>{systems.length} entries</span>
			</div>
			<ul>
				{systems.map((system, i) => (
					<li
						key={system.id}
						className={`flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 ${
							i !== systems.length - 1 ? "border-b border-base-300" : ""
						}`}
					>
						<div className="flex items-center gap-3 sm:w-72 sm:shrink-0">
							<span
								className={`status-dot inline-block h-2 w-2 shrink-0 rounded-full ${statusColor[system.status]}`}
								aria-hidden
							/>
							<div>
								<p className="eyebrow text-[10px] uppercase tracking-widest text-base-content/50">
									{system.org}
								</p>
								<p className="font-display text-sm font-medium leading-tight">
									{system.title}
								</p>
							</div>
						</div>
						<p className="flex-1 text-sm text-base-content/70">{system.summary}</p>
						<span className="eyebrow shrink-0 text-[10px] uppercase tracking-widest text-base-content/40">
							{system.status}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
