export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: integrate with newsletter provider (e.g. Mailchimp, ConvertKit)
    console.log("Newsletter subscription:", body);
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
