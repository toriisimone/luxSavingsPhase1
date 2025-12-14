export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || "default";

  return Response.json({
    message: `You searched for "${keyword}"`,
  });
}