// Chat-Proxy: hält den API-Key serverseitig, Frontend sieht ihn nie.
export default async (req) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  const key = (typeof Netlify !== 'undefined' && Netlify.env && Netlify.env.get('ANTHROPIC_API_KEY')) || process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: { message: 'ANTHROPIC_API_KEY fehlt in den Netlify-Umgebungsvariablen.' } }),
      { status: 500, headers: { 'content-type': 'application/json' } });
  }
  const { system, messages } = await req.json();
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1000, system, messages }),
  });
  return new Response(await r.text(), { status: r.status, headers: { 'content-type': 'application/json' } });
};
