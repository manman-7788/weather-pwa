export default async function handler(req, res) {
  try {
    const upstream = await fetch(`https://www.nmc.cn/rest/weather?stationid=${req.query.stationid || 'cqsJg'}`);
    const data = await upstream.json();
    res.setHeader('Cache-Control', 's-maxage=300');
    res.status(200).json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
}
