import { z } from "zod";
import type { Route } from "./+types/api.contact";

const contactSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	message: z.string().min(10),
});

// Resource route — no default export/component, just an action.
export async function action({ request, context }: Route.ActionArgs) {
	if (request.method !== "POST") {
		return Response.json({ error: "Method not allowed" }, { status: 405 });
	}

	const body = await request.json().catch(() => null);
	const result = contactSchema.safeParse(body);
	if (!result.success) {
		return Response.json({ error: "Invalid submission" }, { status: 400 });
	}

	const { name, email, message } = result.data;

	// TODO: wire up an email provider (e.g. Resend) once RESEND_API_KEY is set
	// as a Cloudflare Worker secret: `npx wrangler secret put RESEND_API_KEY`.
	// Example:
	//
	// const apiKey = context.cloudflare.env.RESEND_API_KEY;
	// await fetch("https://api.resend.com/emails", {
	//   method: "POST",
	//   headers: {
	//     Authorization: `Bearer ${apiKey}`,
	//     "Content-Type": "application/json",
	//   },
	//   body: JSON.stringify({
	//     from: "site@geoff-ayap.site",
	//     to: "you@geoff-ayap.site",
	//     subject: `New message from ${name}`,
	//     text: `${email}\n\n${message}`,
	//   }),
	// });

	console.log("Contact form submission:", { name, email, message });

	return Response.json({ ok: true });
}
