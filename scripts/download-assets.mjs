import fs from 'fs';
import path from 'path';
import http from 'http';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const assets = [
  "2535ea38715df5d0e104eecb689a6f8a5041dd53.svg",
  "fc861e75480436f6ec8b93137ac604a273c03692.svg",
  "90ba09ce24036d798c1514567c2851de77419d85.svg",
  "2e538b19440c8271d3108c95a7cd95fbe44d5cff.svg",
  "b6bacf3088c39aae1f33a37e5e7c980b1df26124.svg",
  "5671ed4f5c36543a9e61c6d477f51838ea3b0c17.png",
  "cefd4853004e336e3886005e8d23f601e1f05ef2.svg",
  "ab60ed3d68739cc08a66b6bfd03a5d9dbd0c9b04.svg",
  "bf5784f61dacdb91002cda6641e71da39bf709cc.svg",
  "55f173c4131a62ab353ff992a728b6fbca27b4cb.png",
  "aa1f875108d70f6a7e14357d2efc30f01a07ac52.png",
  "e1b64b6a5ab157a1f83a3140fa6fad630fb047bb.png",
  "ca43f3fbd4573ceb6bf53fa4ad6f4776fedba3eb.svg",
  "cbbd224e71c462df832bcbe2548d39ae3a5b6d28.svg",
  "5e65677cb3bc39f5cb1cde8414b24eb02fc9bd32.svg",
  "6db5429419d8fa5b7853473aa06ec1aa050431aa.svg",
  "bb3d6995411dccf27d1e48c4216780f4e5e8c2c4.svg",
  "3b5c49227f539715e3847589637256ff39f9243e.svg",
  "5227fca9cfd62c24ed213a02d277edc6cdf770bb.svg",
  "319a2692800d1afc9535decc42f3e9edb3e898d3.svg",
  "51775b675e58c8a3fb88bda9a82762f28e80af88.png",
  "72b920f9272ec3398495319aa0a9c200aa3ef655.png",
  "e4071a8129af78a2de2654a1fa218bff38de6fb3.png",
  "e808162de2d2538038234bc047edf273dda882df.svg",
  "24083339388c849a0d075bc10de35d902e0cdbb8.png",
  "f874480ecdd85fd96e7b879cca22c4b14387560e.png",
  "61088286e1a245884b87f056285e669c4acc0825.png",
  "26e32f971ccac37ea09aca31b14f9c0cfbe9362a.svg",
  "5a52d6182ff980cbcbd14cc1ca22487e922a3036.svg",
  "c924fe84dd83dd0879e07c16b943562d5290b198.svg",
  "af12e5b526a44604d760cb7be96877520d0b403f.svg",
  "9aff7b92d92801a8cd440cda567f1e8eed80ad10.png",
  "a1eadf694c8cec8f2e9d9a9c540da92028fe7d9c.svg",
  "87c6911f0d717e88b5c8b3d23a37e84a5d5b0572.png",
  "9af8423167db80a058fcb913f29202d9894bfb46.svg",
  "67f1a448ccc1aa3a7af9f70053d391bb76bbd931.png",
  "1ff7324de419424f7fa05f4c67c4499015e3703b.svg",
  "246eaa8f8138afa2327e7fa50e79ec55b89dc2ab.svg"
];

async function downloadAsset(filename) {
  const url = `http://localhost:3845/assets/${filename}`;
  const filePath = path.join(ASSETS_DIR, filename);

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    http.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Starting asset download from localhost:3845...');
  for (const asset of assets) {
    try {
      await downloadAsset(asset);
    } catch (err) {
      console.error(err.message);
    }
  }
  console.log('Finished downloading assets.');
}

main();
