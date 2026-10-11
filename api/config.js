module.exports = (request, response) => {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return response.status(500).json({
      error: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in Vercel."
    });
  }

  return response.status(200).json({ url, anonKey });
};
