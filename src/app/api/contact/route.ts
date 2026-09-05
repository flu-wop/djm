// src/app/api/contact/route.ts
// Sends the contact form via Resend. Replaces the previous client-side
// stub (setTimeout + fake "sent" state) that never actually delivered
// anything.
//
// Note on rate limiting: this site has no database (unlike MCS, which
// uses a Turso-backed rate limiter — see mcs/src/lib/rate-limit.ts).
// Standing up a DB just for a contact form's rate limiter would be
// disproportionate for a low-traffic site, so this route relies on a
// honeypot field + strict input validation instead. If this address
// ever gets spammed, the fix is to wire up the same Turso rate-limit
// pattern used on MCS.

import { Resend } from "resend"

function getResend() { return new Resend(process.env.RESEND_API_KEY) }

const MAX_NAME = 100
const MAX_INQUIRY = 60
const MAX_MESSAGE = 2000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: { name?: string; email?: string; inquiry?: string; message?: string; company?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  // Honeypot — real users never fill this in (it's hidden via CSS on the form).
  if (body.company) {
    return Response.json({ ok: true }) // pretend success, drop silently
  }

  const name    = (body.name    ?? "").trim().slice(0, MAX_NAME)
  const email   = (body.email   ?? "").trim().slice(0, MAX_NAME)
  const inquiry = (body.inquiry ?? "").trim().slice(0, MAX_INQUIRY)
  const message = (body.message ?? "").trim().slice(0, MAX_MESSAGE)

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Please fill out all required fields with a valid email." }, { status: 400 })
  }

  try {
    await getResend().emails.send({
      // donaldmarkowitz.com isn't a verified Resend sender domain yet —
      // sending from the verified midcitysound.com domain in the meantime.
      from:    process.env.RESEND_FROM_EMAIL ?? "studio@midcitysound.com",
      to:      process.env.RESEND_TO_EMAIL   ?? "midcitysound1@gmail.com",
      replyTo: email,
      subject: `[DJM Contact] ${inquiry || "General"} — ${name}`,
      html: `
        <div style="font-family:sans-serif;color:#1a1a1a;max-width:520px">
          <h2 style="color:#D4AF77">New Contact Form Submission — donaldmarkowitz.com</h2>
          <table style="width:100%;border-collapse:collapse;margin:16px 0">
            <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td><strong>${name}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${inquiry ? `<tr><td style="padding:8px 0;color:#666">Inquiry</td><td><strong>${inquiry}</strong></td></tr>` : ""}
          </table>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    })
    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: "Couldn't send your message. Please try again or email us directly." }, { status: 500 })
  }
}
