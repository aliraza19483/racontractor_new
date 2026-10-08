import https from 'https';

async function searchPexels(query) {
  return new Promise((resolve) => {
    https.get(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Find pexels image urls
        const urls = [];
        const regex = /https:\/\/images\.pexels\.com\/photos\/\d+\/[^"?]+/g;
        let match;
        while ((match = regex.exec(data)) !== null) {
          if (!urls.includes(match[0]) && !match[0].includes('tiny') && !match[0].includes('avatar')) {
            urls.push(match[0]);
          }
        }
        resolve({ query, status: res.statusCode, urls: urls.slice(0, 5) });
      });
    }).on('error', (e) => resolve({ query, error: e.message }));
  });
}

async function run() {
  const queries = [
    'construction site building',
    'false ceiling interior',
    'accent wall interior',
    'electrical lighting interior',
    'modern luxury kitchen cabinets',
    'luxury living room interior',
    'luxury bathroom interior',
    'modern office showroom fit out'
  ];

  for (const q of queries) {
    const res = await searchPexels(q);
    console.log(q, res.status, res.urls);
  }
}

run();
