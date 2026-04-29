import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';
const outputPath = path.resolve('public', 'words.txt');

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

console.log(`Downloading word list from ${url}...`);

https.get(url, (res) => {
  const filePath = fs.createWriteStream(outputPath);
  res.pipe(filePath);
  filePath.on('finish', () => {
    filePath.close();
    console.log('Download complete.');
  });
}).on('error', (err) => {
  console.error('Error downloading:', err.message);
});
