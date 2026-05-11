export default async function handler(req, res) {

  const { q } = req.query;

  if (!q) {
    return res.json({ error: 'missing query' });
  }

  const url =
    `https://www.amazon.ae/s?k=${encodeURIComponent(q)}&tag=kaisdeals-21`;

  return res.json({
    success: true,
    source: 'amazon',
    deals: [
      {
        title: `Best ${q}`,
        price: 'See Amazon offers',
        link: url,
      },
    ],
  });
}
