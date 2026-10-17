export default async function handler(req, res) {
  const mockDg = [
    { d: '今天', icon: 'cloud-sun', text: '多云转晴', min: 24.5, max: 31.8 },
    { d: '周一', icon: 'thunder', text: '局部雷阵雨', min: 23.5, max: 29.8 },
    { d: '周二', icon: 'rain', text: '中到大雨', min: 22.8, max: 27.2 },
    { d: '周三', icon: 'cloud', text: '阴天间多云', min: 23.2, max: 30.5 },
    { d: '周四', icon: 'sun', text: '晴间多云', min: 24.8, max: 32.8 },
    { d: '周五', icon: 'sun', text: '晴', min: 25.5, max: 33.8 },
    { d: '周六', icon: 'cloud-sun', text: '多云', min: 24.2, max: 31.5 }
  ];
  res.setHeader('Cache-Control', 's-maxage=3600');
  res.status(200).json({ data: mockDg });
}
