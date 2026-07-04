const fs = require('fs');
const https = require('https');

const domains = {
  'logo-qatar.png': 'qatarairways.com',
  'logo-etihad.png': 'etihad.com',
  'logo-airindia.png': 'airindia.com',
  'logo-cathay.png': 'cathaypacific.com',
  'logo-southwest.png': 'southwest.com',
  'logo-united.png': 'united.com',
  'logo-delta.png': 'delta.com'
};

let pending = Object.keys(domains).length;

for (const [file, domain] of Object.entries(domains)) {
  const fileStream = fs.createWriteStream(`public/images/${file}`);
  https.get(`https://logo.clearbit.com/${domain}`, function(response) {
    if (response.statusCode === 200) {
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${file}`);
        checkDone();
      });
    } else {
      console.log(`Failed for ${file} with status ${response.statusCode}`);
      checkDone();
    }
  }).on('error', (err) => {
    console.error(err);
    checkDone();
  });
}

function checkDone() {
  pending--;
  if (pending === 0) {
    console.log('Done');
    process.exit(0);
  }
}
