export default async function handler(req, res) {

  const { q } = req.query || 'dubai';

  const url =
    `https://www.booking.com/searchresults.en-gb.html?ss=${encodeURIComponent(q || 'dubai')}`;

  return res.json({
    success: true,
    source: 'booking',
    hotels: [
      {
        name: `Hotels in ${q}`,
        price: 'Sorted by Booking.com',
        rating: 'See live ratings',
        link: url,
      },
    ],
  });
}
