export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: integrate with email provider (e.g. Resend, SendGrid)
    console.log("Contact form submission:", body);
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
