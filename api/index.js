export default async function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();

  const botUAs = [
    'facebookexternalhit', 'facebot', 'facebookbot',
    'adsbot', 'googlebot', 'bingbot', 'twitterbot',
    'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
    'crawler', 'spider', 'headless', 'phantom', 'python',
    'curl', 'wget', 'java/', 'apache-httpclient'
  ];

  const metaIPs = [
    '66.220.', '69.63.', '69.171.', '173.252.',
    '31.13.', '157.240.', '179.60.', '204.15.'
  ];

  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));

  if (isBot || isMeta) {
    res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-zeca' });
    res.end();
    return;
  }

  const links = [
    'https://chat.whatsapp.com/HHdJVe1vYRzBNGxCV3n376',   // Adriano 05
    'https://chat.whatsapp.com/DZKrprJ2z4rL1TUnXqm1UM',   // Adriano 06
    'https://chat.whatsapp.com/INddlJqtUvL4IXc2mpNIFn',   // João 15
    'https://chat.whatsapp.com/LZpweYFPnRXBpAs06JSccW',   // João 16
  ];

  const destination = links[Math.floor(Math.random() * links.length)];

  res.writeHead(302, { Location: destination });
  res.end();
}
