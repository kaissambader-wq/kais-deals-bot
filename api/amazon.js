export default async function handler(req, res) {

  const { q } = req.query;

  if (!q) {
    return res.json({ error: 'missing query' });
  }

const searchUrl =
  `https://www.amazon.ae/s?k=${encodeURIComponent(q)}&tag=kaisdeals-21`;

const redirectLink =
  `https://kais-deals-bot.vercel.app/api/go?url=${encodeURIComponent(searchUrl)}`;

  return res.json({
    success: true,
    source: 'amazon',
deals: [
  {
    title: `Best ${q} Deals`,
    link: redirectLink
  }
]
  });
}
