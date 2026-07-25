import { useState } from "react";
import { z } from "zod";
import type { Route } from "./+types/contact";
import { PageLayout } from "../components/PageLayout";
import { profile } from "../lib/data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `Contact — ${profile.name}` },
		{ name: "description", content: "Get in touch about roles, freelance, or consulting." },
	];
}

const contactSchema = z.object({
	name: z.string().min(2, "Name is too short"),
	email: z.string().email("Enter a valid email"),
	message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
	const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
	const [state, setState] = useState<FormState>("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const values = {
			name: String(formData.get("name") ?? ""),
			email: String(formData.get("email") ?? ""),
			message: String(formData.get("message") ?? ""),
		};

		const result = contactSchema.safeParse(values);
		if (!result.success) {
			const fieldErrors: Partial<Record<string, string>> = {};
			for (const issue of result.error.issues) {
				fieldErrors[issue.path[0] as string] = issue.message;
			}
			setErrors(fieldErrors);
			return;
		}

		setErrors({});
		setState("submitting");
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(result.data),
			});
			if (!res.ok) throw new Error("Request failed");
			setState("success");
			e.currentTarget.reset();
		} catch {
			setState("error");
		}
	}

	return (
		<PageLayout>
			<section className="mx-auto max-w-xl px-6 py-20">
				<p className="eyebrow text-[11px] uppercase tracking-widest text-primary">
					Contact
				</p>
				<h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
					Let's talk
				</h1>
				<p className="mt-4 text-base-content/70">
					Open to remote roles, local Philippine opportunities, and freelance /
					consulting work. Drop a message below or reach me directly at{" "}
					<a href={`mailto:${profile.email}`} className="link link-primary">
						{profile.email}
					</a>
					.
				</p>

				<form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
					<div>
						<label htmlFor="name" className="eyebrow text-xs uppercase tracking-widest">
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							className="input input-bordered mt-2 w-full"
							placeholder="Your name"
						/>
						{errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
					</div>

					<div>
						<label htmlFor="email" className="eyebrow text-xs uppercase tracking-widest">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							className="input input-bordered mt-2 w-full"
							placeholder="you@example.com"
						/>
						{errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
					</div>

					<div>
						<label
							htmlFor="message"
							className="eyebrow text-xs uppercase tracking-widest"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							className="textarea textarea-bordered mt-2 w-full"
							placeholder="What are you working on?"
						/>
						{errors.message && (
							<p className="mt-1 text-sm text-error">{errors.message}</p>
						)}
					</div>

					<button
						type="submit"
						disabled={state === "submitting"}
						className="btn btn-primary w-full"
					>
						{state === "submitting" ? "Sending…" : "Send message"}
					</button>

					{state === "success" && (
						<p className="text-sm text-secondary">
							Message sent — I'll get back to you soon.
						</p>
					)}
					{state === "error" && (
						<p className="text-sm text-error">
							Something went wrong. Email {profile.email} directly instead.
						</p>
					)}
				</form>
			</section>
		</PageLayout>
	);
}
