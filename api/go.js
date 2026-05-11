export default function handler(req, res) {

  const { url } = req.query;

  if (!url) {
    return res.status(400).send('Missing url');
  }

  // optional: tracking can be added here later
  return res.redirect(url);
}
